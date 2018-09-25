const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/rooms/";
const sequelize = require("../../src/db/models/index").sequelize;
const Room = require("../../src/db/models").Room;

describe("routes : rooms", () => {

  beforeEach((done) => {
    this.room;
    sequelize.sync({force: true}).then((res) => {

     Room.create({
       title: "JS Frameworks"
     })
      .then((room) => {
        this.room = room;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });

    });

  });

  describe("GET /rooms", () => {

    it("should return a status code 200 and all rooms", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Rooms");
        expect(body).toContain("JS Frameworks");
        done();
      });
    });
  });

});
