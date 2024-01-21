import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";

const bloggBrod = async (req: NextApiRequest, res: NextApiResponse) => {
   let connection;
   const { id } = req.query;
   try {
      connection = await pool.promise().getConnection();
      const [intro] = await connection.query(
         `SELECT * FROM fortelle2.bloggbrodtekster WHERE post_id = ?`,
         [id]
      );
      res.status(200).json(intro);
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
