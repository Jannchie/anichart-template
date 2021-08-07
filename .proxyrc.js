const serveStatic = require("serve-static");

module.exports = function (app) {
  app.use(serveStatic("node_modules/@ffmpeg/core/dist"));
  app.use(serveStatic("data"));
};
