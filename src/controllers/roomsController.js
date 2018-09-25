const roomQueries = require("../db/queries.rooms.js");


module.exports = {
  index(req, res, next){
    roomQueries.getAllRooms((err, rooms) => {

      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("rooms/index", {rooms});
      }
    })
  }
}
