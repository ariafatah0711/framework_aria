import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "http",
    transports: [new MyTransport({})],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
  logger.http("Hello http");
});
