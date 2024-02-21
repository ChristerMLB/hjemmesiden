import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import validator from "validator";

const sendEpost = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method === "POST") {
      const { navn, epost, melding } = req.body;

      if (validator.isEmpty(melding)) {
         res.status(400).json({ error: "vennligst skriv inn en melding." });
      }
      if (!validator.isEmail(epost)) {
         res.status(400).json({
            error: "det ser ut som det er noe feil med epostadressen.",
         });
         return;
      }

      const normalisertEpost = validator.normalizeEmail(epost);
      const sanitertMelding = validator.escape(melding);

      try {
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
            subject: `epost fra nettsiden fra ${navn} (${normalisertEpost})`,
            text: `${sanitertMelding} \n\nsendt fra nettsiden, svar på ${normalisertEpost}`,
         });

         res.status(200).json({ success: true });
      } catch (e) {
         res.status(400).json({
            error: `Fikk ikke sendt eposten, noe gikk galt: ${e}`,
         });
         return;
      }
   } else {
      res.status(405).json({
         error: "forespørselen ble sendt med feil metode. her er det noe galt på gang! gi meg gjerne beskjed hvis du kan!",
      });
   }
};

export default sendEpost;
