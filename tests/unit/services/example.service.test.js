const { sequelize } = require("../../../src/helpers");
const { exampleService } = require("../../../src/services");

describe("Example service", () => {
  let params = { attr1: "esf3" };

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await sequelize.sync({ force: true });
    exampleService.create(params);
  });

  test("Create", async () => {
    const example = await exampleService.create(params);
    await expect(example.attr1).toEqual(params.attr1);
  });

  test("Get list", async () => {
    const list = await exampleService.getAll();
    await expect(list.length).toBeGreaterThanOrEqual(1);
  });

  test("Get by id", async () => {
    const example = await exampleService.getById(1);
    await expect(example.attr1).toEqual(params.attr1);
  });

  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await sequelize.close();
  });
});
