import winston from "winston";

const customLevels = {
  levels: {
    debug: 0,
    http: 1,
    info: 2,
    warning: 3,
    error: 4,
    fatal: 5,
  },
  colors: {
    debug: "grey",
    http: "cyan",
    info: "green",
    warning: "yellow",
    error: "red",
    fatal: "magenta",
  },
};

winston.addColors(customLevels.colors);

export const loggerDevelopment = winston.createLogger({
  levels: customLevels.levels,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "errors.log",
      level: "error",
      format: winston.format.combine(winston.format.simple()),
    }),
    new winston.transports.File({
      filename: "info.log",
      level: "info",
      format: winston.format.combine(winston.format.simple()),
    }),
    new winston.transports.File({
      filename: "warnings.log",
      level: "warning",
      format: winston.format.combine(winston.format.simple()),
    }),
  ],
});

export const loggerProduction = winston.createLogger({
  levels: customLevels.levels,
  transports: [
    new winston.transports.File({
      filename: "errors.log",
      level: "error",
      format: winston.format.combine(winston.format.simple()),
    }),
    new winston.transports.File({
      filename: "info.log",
      level: "info",
      format: winston.format.combine(winston.format.simple()),
    }),
    new winston.transports.File({
      filename: "warnings.log",
      level: "warning",
      format: winston.format.combine(winston.format.simple()),
    }),
  ],
});
