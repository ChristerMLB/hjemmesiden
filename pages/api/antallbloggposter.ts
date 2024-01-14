import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";


const antallBloggPoster = async (req: NextApiRequest, res: NextApiResponse) => {

    type Result = {
        antall:number,
    }

    let connection;
   try {
      connection = await pool.promise().getConnection();
       // antallResultat behøver en type. Forsøk å optimalisere resultatet. kall den res
      const antallResultat = await connection.query(
         `SELECT COUNT(*) as antall FROM fortelle2.bloggposter`
      ) as any[][];
      const antallresultat2:Result = antallResultat[0][0];
      const antall = antallresultat2.antall;
      res.status(200).json(antall);
   } catch (e) {
      res.status(500).json({ error: `En feil oppsto under oppslag i databasen: ${e}` });
      throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
   } finally {
      if (connection) {
         connection.release();
      }
   }
};

export default antallBloggPoster;
