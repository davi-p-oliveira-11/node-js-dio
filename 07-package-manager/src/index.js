import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.blue.bgGray.italic("Hello World"));

console.log(chalk.blue.bgGreen.italic("Ola, eu sou"));
console.log(chalk.green.bgCyan.bold("Jarvis"));

console.log(logSymbols.success, "servidor iniciado com sucesso");
console.log(
  logSymbols.error,
  chalk.red.italic("servidor iniciado com sucesso")
);
