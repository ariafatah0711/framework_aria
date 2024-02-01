export class Myexception extends Error {}

export const callMe = (name) => {
  if (name === "aria") {
    throw new Myexception("Ups My  Exception happens");
  } else {
    return "OK";
  }
};
