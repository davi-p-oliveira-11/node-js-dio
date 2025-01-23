import { getBaseEmail } from "./services/email";

async function main() {
  console.log(await getBaseEmail("joao"));

  console.log("finalizando");
  console.log("...");
}
