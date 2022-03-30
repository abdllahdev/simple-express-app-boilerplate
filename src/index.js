const app = require("./app");
const { appConfig } = require("./configs");
const { logger } = require("./utils");
const { sequelize } = require("./helpers");

// Sync all models with database
sequelize.sync();

// Start server
app.listen(appConfig.PORT, () =>
  logger.info(
    `Server running on port ${appConfig.PORT} - Environment: ${process.env.NODE_ENV}`
  )
);
