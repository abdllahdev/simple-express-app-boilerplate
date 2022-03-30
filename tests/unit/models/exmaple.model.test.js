const { db } = require("../../../src/helpers");
const { Example } = require("../../../src/models");

describe("Example model", () => {
  let params = {};

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  test("attr1 is required", async () => {
    params = {};
    await expect(Example.create(params)).rejects.toThrow();
  });

  test("should not have less than 3 characters", async () => {
    params.attr1 = "we";
    await expect(Example.create(params)).rejects.toThrow();
  });

  test("should not have more than 10 characters", async () => {
    params.attr1 = "weasdlasdffdsaf";
    await expect(Example.create(params)).rejects.toThrow();
  });

  test("should consist of numbers/letters", async () => {
    params.attr1 = "#@$DSA21";
    await expect(Example.create(params)).rejects.toThrow();
  });

  test("created successfully", async () => {
    params.attr1 = "asdf12";
    await expect(Example.create(params)).toBeTruthy();
  });

  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await db.close();
  });
});
