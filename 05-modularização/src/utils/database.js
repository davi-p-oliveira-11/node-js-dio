const databaseType = {
  userType: "admin",
  databaseType: "datalocal",
};

async function connectToDatabase(dataName) {
  // logica de conexão
  console.log(`conectado ao banco ${dataName}`);
}

async function disconnectDatabase() {
  console.log("desconectando do banco de dados");
}

export { connectToDatabase, disconnectDatabase, databaseType };
