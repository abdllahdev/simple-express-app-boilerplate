const httpStatus = require("http-status");
const { Example } = require("../models");
const { ApiError } = require("../utils");

const create = async (params) => {
  const example = await Example.create(params);
  return example;
};

const getAll = async () => {
  const examples = await Example.findAll();
  return examples;
};

const getById = async (id) => {
  const example = await Example.findByPk(id);

  if (!example)
    throw new ApiError(httpStatus.NOT_FOUND, [{ msg: "Instance not found" }]);

  return example;
};

const update = async (id, params) => {
  const example = await getById(id);
  const updatedExample = await example.update(params);
  await updatedExample.save();
  return updatedExample;
};

const destroy = async (id) => {
  const example = await getById(id);
  return await example.destroy();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
