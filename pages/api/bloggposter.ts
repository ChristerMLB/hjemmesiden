import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";

const bloggListe = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   try {
      const { forskyvning = 0 } = req.query;
      connection = await pool.promise().getConnection();
      const [intro] = await connection.query(
         `SELECT * FROM fortelle2.bloggposter ORDER BY dato LIMIT 10 OFFSET ${forskyvning}`
      );
      res.status(200).json(intro);
   } catch (e) {
      res.status(500).json({ error: `En feil oppsto under oppslag i databasen: ${e}` });
      throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
   } finally {
      if (connection) {
         connection.release();
      }
   }
};

export default bloggListe;