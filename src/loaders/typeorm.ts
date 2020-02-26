import { createConnection } from "typeorm";
import { User } from "../entity/user.entity";

// Ici on met toutes les connections avec la BDD, et on oublie pas de rajouter les diverses 'entities'
// à l'intérieur des crochets pour les déclarer en quelque sorte.

export default async () => {
  await createConnection({
    type: "mysql",
    host: "localhost",
    username: "",
    password: "",
    database: "",
    entities: [User],
    synchronize: true
  });
};
