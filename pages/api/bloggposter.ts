import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";
import { escape } from "validator";

const bloggListe = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   try {
      const { forskyvning = '0' } = req.query;
      const escapedForskyvning: number = parseInt(escape(forskyvning as string));
      connection = await pool.promise().getConnection();
      const [bloggposter] = await connection.query(
         `SELECT * FROM fortelle2.bloggposter ORDER BY dato LIMIT 10 OFFSET ?`, [escapedForskyvning]
      );
      res.status(200).json(bloggposter);
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
