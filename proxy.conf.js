const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "http://api.asnhealth.cn/api/v1/",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    headers: {}
  }
]
module.exports = PROXY_CONFIG;
