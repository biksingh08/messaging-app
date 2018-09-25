const Room = require("./models").Room;

module.exports = {

  getAllRooms(callback){
    return Room.all()

    .then((rooms) => {
      callback(null, rooms);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
