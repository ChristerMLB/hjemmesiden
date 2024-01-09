import mysql from "mysql2";

export const pool = mysql.createPool({
   host: process.env.DATABASE_HOSTNAME,
   user: process.env.DATABASE_NAME,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE_NAME,
   waitForConnections: true,
   connectionLimit: 3,
   queueLimit: 0,
});

pool.getConnection((error) => {
   if (error) {
      throw new Error("Feil i tilkobling til databasen: ", error);
   } else {
      console.log("Connected to database, beep boop.");
   }
});
