const PROXY_CONFIG = [
  {
    context: [
      "/172.20.10.7:4567/fruit5.jpg"
    ],
    target: "http://localhost:3000",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
