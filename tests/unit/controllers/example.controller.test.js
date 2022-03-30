const app = require("../../../src/app");
const { sequelize } = require("../../../src/helpers");
const supertest = require("supertest");
const httpStatus = require("http-status");

describe("Example controller", () => {
  let params = { attr1: "dasd232" };

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("Create", async () => {
    await supertest(app)
      .post("/example/create")
      .send(params)
      .set("Accept", "application/json")
      .expect(httpStatus.CREATED)
      .expect("Content-Type", /json/);
  });

  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await sequelize.close();
  });
});
