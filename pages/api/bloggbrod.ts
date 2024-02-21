import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";
import { escape } from "validator";

const bloggBrod = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   const { id } = req.query;
   const escapedId: number = parseInt(escape(id as string));
   if (Number.isNaN(escapedId)) {
      res.status(400).json({ error: 'Her har det skjedd noe rart, kan du fortelle meg om det? Bruk kontakt-linken oppe til høyre.' });
   }

   try {
      connection = await pool.promise().getConnection();
      const [brodtekst] = await connection.query(
         `SELECT * FROM fortelle2.bloggbrodtekster WHERE post_id = ?`,
         [escapedId]
      );
      res.status(200).json(brodtekst);
   } catch (e) {
      console.error(`En feil oppsto under oppslag i databasen:`, e);
      res.status(500).json({ error: `En feil oppsto under oppslag i databasen: ${e}` });
      throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
   } finally {
      if (connection) {
         connection.release();
      }
   }
};
export default bloggBrod;
