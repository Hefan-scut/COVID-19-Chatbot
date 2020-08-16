module.exports = {
  "devServer": {
    "proxy": {
      "/api": {
        "target": "https://api.ai.qq.com",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": "/"
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}