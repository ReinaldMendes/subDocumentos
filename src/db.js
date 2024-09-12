import mongoose from "mongoose";
const mongoDB =
  "mongodb+srv://reinald302009:gMn95QlTaahvIBtF@cluster0.sviwi.mongodb.net/";
const database = "armario";
async function main() {
  mongoose.connect(mongoDB + database);
}

main()
  .then(() => console.log("Conectado com sucesso ao db "))
  .catch((err) => console.log(err));

export default mongoose;
// export default{
//     funcao,
//     funcao2
// }
