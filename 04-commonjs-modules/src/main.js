const product = require("./services/products");
const config = require("./services/config");
const database = require("./servicers/database");

async function main() {
  console.log("market cart");

  // p.getFullName("408", "mousepad");
  // p.getFullName("508", "mouse");
  // p.getProductLabel("mousepad");
  database.connectToDatabase();
}

main();
