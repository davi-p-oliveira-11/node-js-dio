async function connectToDatabase(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("conexão com o banco de dados estabelecida");
  } else {
    console.log("falha de login, não foi possivel se conectar ao BD");
  }
}

export default connectToDatabase;
