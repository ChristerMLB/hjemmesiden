import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import validator from "validator";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
   windowMs: 10 * 60 * 1000, // ten minutes in ms
   max: 5,
   message: {
      error: "serveren synes det ble for mange forespørsler, vent noen minutter før du prøver igjen.",
   },
   validate: { ip: false, trustProxy: false, xForwardedForHeader: false },
});

const sendEpost = async (req: NextApiRequest, res: NextApiResponse) => {
   limiter(req, res, async () => {
      if (req.method === "POST") {
         const { navn, epost, melding, honeypot, botCheck } = req.body;

         if (honeypot) {
            res.status(400).json({
               error: 'vennligst ikke godta "terms and conditions", det er et skjult felt som bare er der for å lure roboter :)',
            });
         }
         const botCheckFasit = ["5", "five", "fem", "funf", "fünf", "cinq"];
         if (!botCheckFasit.includes(botCheck)) {
            res.status(400).json({
               error: "serveren tror du er en robot fordi du ga feil svar i det siste feltet. Vennligst prøv igjen :)",
            });
         }
         if (validator.isEmpty(melding)) {
            res.status(400).json({
               error: "serveren har ikke mottatt noe fra meldingsfeltet, vennligst prøv igjen.",
            });
         }
         if (!validator.isEmail(epost)) {
            res.status(400).json({
               error: "serveren synes det ser ut som det er noe feil med epostadressen.",
            });
         }

         const normalisertEpost = validator.normalizeEmail(epost);
         const sanitertMelding = validator.escape(melding);
         const sanitertNavn = validator.escape(navn);

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
               from: `"${sanitertNavn}" <franettsiden@fortelle.no>`,
               to: "franettsiden@fortelle.no",
               subject: `epost fra nettsiden fra ${sanitertNavn} (${normalisertEpost})`,
               text: `${sanitertMelding} \n\nsendt fra nettsiden, svar på ${normalisertEpost}`,
            });

            res.status(200).json({ success: true });
         } catch (e) {
            res.status(400).json({
               error: `Fikk ikke sendt eposten, noe gikk galt: ${e}`,
            });
         }
      } else {
         res.status(405).json({
            error: "forespørselen ble sendt med feil metode. her er det noe galt på gang! gi meg gjerne beskjed hvis du kan!",
         });
      }
   });
};

export default sendEpost;
