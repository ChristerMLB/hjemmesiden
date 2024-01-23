import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');


const sendEpost = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const {navn, epost, melding } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_UNAME,
                pass: process.env.EMAIL_SECRET_WORD,
            }
        });

        const info = await transporter.sendMail({
            from: `"${navn}" <fraNettsiden@fortelle.no>`,
            to: "fraNettsiden@fortelle.no",
            subject: `Epost fra nettsiden fra ${navn} (${epost})`,
            text: `${melding} \n\nSendt fra nettsiden, svar på ${epost}`,
        })

        console.log('info:', info);
        console.log(req.body);
        console.log(`epostskjema mottatt, navn: ${navn}, epostadresse: ${epost}, melding: ${melding}`);

        res.status(200).json({success: true});
    }else{
        res.status(405).json({ error: 'Forespørselen ble sendt med feil metode. Her er det noe galt på gang! Gi meg gjerne beskjed hvis du kan!'});
    }
}

export default sendEpost;