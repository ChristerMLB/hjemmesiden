import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";

const ressursListe = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   try {
      connection = await pool.promise().getConnection();
      const [ressursListen] = await connection.query("SELECT * FROM fortelle2.ressursliste");
      res.status(200).json(ressursListen);
   } catch (e) {
      res.status(500).json({ error: `En feil oppsto under oppslag i databasen: ${e}` });
      throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
   } finally {
      if (connection) {
         connection.release();
      }
   }
};

export default ressursListe;
