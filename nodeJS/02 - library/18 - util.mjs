import util from "util";

/*
%s = string
%d = number
%i = parseInt()
%f = float
%j = JSON
%o = object
%c = css
%% = single precent sign (`%`)
*/

console.info(util.format("Name : %s, Age : %d, class : %i", "aria", 17, 11));
console.info(" ");

// json
const person = { firstName: "aria", lastName: "fatah" };
console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
console.log(" ");

// string
const { firstName, lastName } = person;
console.info(util.format("name : %s %s ", firstName, lastName));
console.info(util.format("name : %s %i %s ", firstName, lastName));

// dll
/*
util.types.isStringObject;
util.types.isDate;
util.promisify();
*/
