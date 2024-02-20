import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import { z } from "zod";

const sendEpost = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method === "POST") {
      try {
         const { navn, epost, melding } = req.body;

         const emailSchema = z.string().email();
         const parsedEmail = emailSchema.parse(epost);

         const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
               user: process.env.EMAIL_UNAME,
               pass: process.env.EMAIL_SECRET_WORD,
            },
         });

         const info = await transporter.sendMail({
            from: `"${navn}" <franettsiden@fortelle.no>`,
            to: "franettsiden@fortelle.no",
            subject: `epost fra nettsiden fra ${navn} (${parsedEmail})`,
            text: `${melding} \n\nsendt fra nettsiden, svar på ${parsedEmail}`,
         });

         res.status(200).json({ success: true });
      } catch (e) {
         res.status(400).json({
            error: `det ser ut som det er noe feil med epostadressen: ${e}`,
         });
      }
   } else {
      res.status(405).json({
         error: "forespørselen ble sendt med feil metode. her er det noe galt på gang! gi meg gjerne beskjed hvis du kan!",
      });
   }
};

export default sendEpost;
