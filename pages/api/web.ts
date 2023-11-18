import { connection } from "@/utilities/db";
import { NextApiRequest, NextApiResponse } from "next";

const webListe = async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        const [intro] = await connection.promise().query('SELECT * FROM fortelle2.web');
        res.status(200).json(intro);
    }catch(e){
        res.status(500).json({error: `En feil oppsto under oppslag i databasen: ${e}`});
        throw new Error(`En feil oppsto under oppslag i databasen: ${e}`);
    }
}

export default webListe;