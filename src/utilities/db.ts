import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: process.env.DATABASE_HOSTNAME,
    user: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect((error) => {
    if(error){
        throw new Error('Feil i tilkobling til databasen: ', error);
    }else{
        console.log('Connected to database, beep boop.')
    }
})