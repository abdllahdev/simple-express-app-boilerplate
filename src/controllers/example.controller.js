const httpStatus = require("http-status");
const { exampleService } = require("../services");
const { handleResponse } = require("../utils");

const create = async (req, res, next) => {
  const params = req.body;

  exampleService
    .create(params)
    .then((data) => {
      const payload = {
        status: httpStatus.CREATED,
        msg: "Instance created successfully",
        data: data,
      };

      handleResponse(res, payload);
    })
    .catch(next);
};

const getAll = async (req, res, next) => {
  exampleService
    .getAll()
    .then((data) => {
      const payload = {
        status: httpStatus.OK,
        msg: "List retrieved successfully",
        data: data,
      };

      handleResponse(res, payload);
    })
    .catch(next);
};

const getById = async (req, res, next) => {
  const id = req.params.id;

  exampleService
    .getById(id)
    .then((data) => {
      const payload = {
        status: httpStatus.OK,
        msg: "Instance retrieved successfully",
        data: data,
      };

      handleResponse(res, payload);
    })
    .catch(next);
};

const update = async (req, res, next) => {
  const id = req.params.id;
  const params = req.body;

  exampleService
    .update(id, params)
    .then((data) => {
      const payload = {
        status: httpStatus.OK,
        msg: "Instance updated successfully",
        data: data,
      };

      handleResponse(res, payload);
    })
    .catch(next);
};

const destroy = async (req, res, next) => {
  const id = req.params.id;

  exampleService
    .destroy(id)
    .then(() => {
      const payload = {
        status: httpStatus.OK,
        msg: "Instance deleted successfully",
      };

      handleResponse(res, payload);
    })
    .catch(next);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
