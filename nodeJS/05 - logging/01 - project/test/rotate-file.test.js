import winston from "winston";
import dailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
      new dailyRotateFile({
        filename: `log/app-%DATE%.log`,
        zippedArchive: "true", // arcaid => dihapus
        maxSize: "1m", // max file 1mb jika lebih akan buat file baru lagi dan seterusnya
        maxFiles: "14d", // max day yang nanti akan terhapus
      }),
    ],
  });

  for (let i = 0; i < 1000; i++) {
    logger.info(`hello world ${i}`);
  }
});
