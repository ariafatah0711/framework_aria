import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "log/rejection.log",
    }),
  ],
});

async function callAsync() {
  return Promise.reject("ups");
}

callAsync();
