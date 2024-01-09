
import { pool } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";

const antallBloggPoster = async (req: NextApiRequest, res: NextApiResponse) => {
    let connection;
    try{
        connection = await pool.promise().getConnection();
        const antallResultat = await connection.query(`SELECT COUNT(*) as antall FROM fortelle2.bloggposter`);
        // @ts-ignore - PLS FIX ME!
        const antall = antallResultat[0][0].antall as number;
        res.status(200).json(antall);
    }catch(e){
        res.status(500).json({error: `En feil oppsto under oppslag i databasen: ${e}`});
        throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
    }finally{
        if(connection){connection.release(); }
    }
}

export default antallBloggPoster;