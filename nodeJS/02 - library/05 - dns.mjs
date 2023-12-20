/* versi callback */
/*
import dns from "dns";
function callback(error, ip) {
    console.info(ip);
}

dns.lookup("www.programmerzamannow.com", callback);
*/

/* versi promise */
import dns from "dns/promises";

const address = await dns.lookup("www.programmerzamannow.com");
console.info(address);

console.info(address.address); // ip address
console.info(address.family); // version addres ipv4
