let buffer = Buffer.from("aria fatah");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
console.info(" ");

// encoding
buffer = Buffer.from("aria fatah", "utf8");

console.info(buffer.toString("hex")); // hexdesimal
console.info(buffer.toString("base64"));

buffer = Buffer.from("YXJpYSBmYXRhaA==", "base64url");
console.info(buffer.toString("utf8"));
