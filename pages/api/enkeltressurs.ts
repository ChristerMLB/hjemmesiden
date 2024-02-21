
import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";
import { escape } from "validator";

const enkeltressurs = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   const { ressursId } = req.query;
   const escapedRessursId = parseInt(escape(ressursId as string));
   try {
      connection = await pool.promise().getConnection();
      const [ressurs] = await connection.query(`SELECT * FROM fortelle2.ressurser WHERE id=${escapedRessursId}`);
      res.status(200).json(ressurs);
   } catch (e) {
      res.status(500).json({ error: `En feil oppsto under oppslag i databasen: ${e}` });
      throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
   } finally {
      if (connection) {
         connection.release();
      }
   }
};

export default enkeltressurs;
