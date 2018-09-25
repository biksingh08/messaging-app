module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const roomsRoutes = require("../routes/rooms");
    app.use(staticRoutes);
    app.use(roomsRoutes);
  }
}
