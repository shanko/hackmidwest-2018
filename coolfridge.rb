require 'dotenv/load'

require 'sinatra'
require 'sinatra/json'
require 'sinatra/cors'

require 'cloudinary'
require 'cloudinary/uploader'
require 'cloudinary/utils'

require 'twilio-ruby'

require 'pp'

set :bind, '0.0.0.0'

set :allow_origin,   '*'
set :allow_methods,  'GET,HEAD,POST'
set :allow_headers,  'content-type,if-modified-since'
set :expose_headers, 'location,link'

helpers do
  def base_url
    @base_url ||= "#{request.env['rack.url_scheme']}://#{request.env['HTTP_HOST']}"
  end
end

get '/photo' do
begin
  ## pp [ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'], ENV['TWILIO_FROM_PHONE'], ENV['TWILIO_TO_PHONE']]
  client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
  message = client.messages.create(
                              from: ENV['TWILIO_FROM_PHONE'],
                              body: "This is what's in your fridge as of #{Time.now.to_s} :)",
                              to:   ENV['TWILIO_TO_PHONE']
                            )

  if Cloudinary.config.api_key.blank?
      require_relative './config'
  end

  ne_preset = "t_ne"
  nw_preset = "t_nw"
  se_preset = "t_se"
  sw_preset = "t_sw"
   
  version = "v#{rand(1000_000)}"
  cropped_image_responses = [{
      id:   'msts_hmw_fridge_contents',
      url:  "https://res.cloudinary.com/msts-smartfridge/image/upload/#{version}/msts_hmw_fridge_contents.jpg",
      name: 'full_image', score: 1.0, timestamp: Time.now.to_s
    }]

  [ne_preset, nw_preset, se_preset, sw_preset].each do |preset|
    version = "v#{rand(1000_000)}"
    new_url = "https://res.cloudinary.com/msts-smartfridge/image/upload/#{preset}/#{version}/msts_hmw_fridge_contents.jpg"
    resp = Cloudinary::Uploader.upload(new_url, :tags => "basic_sample", :categorization => "aws_rek_tagging")
    data = resp["info"]["categorization"]["aws_rek_tagging"]["data"].first
    cropped_image_responses << {id: resp['public_id'], url: resp['url'], name: data['tag'], score: data['confidence'], timestamp: Time.now.to_s}
  end
  # puts "Cloudinary replied for #{img}..." + Time.now.to_s
  output = cropped_image_responses
rescue
  output = [{:error => $!.to_s}]
end
  json(output)
end

get '/picture' do
begin
  img = (params[:pic] || 'fruit0.jpg')
  img_path = "./public/#{img}"
  if (img =~ /fruit(.*)[.]jpg/i)
    img_id  = $1.to_i
  else
    img_id = 0
  end

  cmd = %Q(curl -s -X POST -u "apikey:#{ENV['WATSON_API_KEY']}" --form "images_file=@#{img_path}" "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19")
  # puts cmd

  t1 = Time.now
  str = `#{cmd}`
  t2 = Time.now
  # puts "watson is back in #{(t2-t1)} seconds!"

  json_obj = JSON.parse(str)

  hash = json_obj.to_h
  # pp hash;puts

  classes = Array(hash["images"]&.first["classifiers"]&.first["classes"])
  last    = classes.select{|h1| h1["type_hierarchy"]}.sort_by{|h| h["score"]}.last
  img_url = base_url + '/' + img
  if last
    output = {name: last["class"], url: img_url, date: Time.now.to_s, id: img_id, score: last["score"]}
  else
    output = {name: img, url: img_url, date: Time.now.to_s, id: img_id, pct: 0.999}
  end
  #pp output

rescue
   output = {error: $!.to_s}
end
  json([output])
end
