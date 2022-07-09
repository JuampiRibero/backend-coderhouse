const log4js = require("log4js");

log4js.configure({
  appenders: {
    console: { type: "console" },
    archivoWarning: { type: "file", filename: "warn.log " },
    archivoError: { type: "file", filename: "error.log " },
    loggerConsola: {
      type: "logLevelFilter",
      appender: "console",
      level: "info",
    },
    loggerArchivoWarning: {
      type: "logLevelFilter",
      appender: "archivoWarning",
      level: "warn",
    },
    loggerArchivoError: {
      type: "logLevelFilter",
      appender: "archivoError",
      level: "error",
    },
  },
  categories: {
    default: {
      appenders: ["loggerConsola", "loggerArchivoWarning", "loggerArchivoError"],
      level: "all",
    },
  },
});

module.exports = log4js.getLogger();
