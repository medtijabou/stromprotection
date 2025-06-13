import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Charge les variables d'environnement depuis .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Données reçues :", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  // Config du transporteur SMTP avec variables d'environnement
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      // eslint-disable-next-line no-undef
      user: process.env.SMTP_USER,
      // eslint-disable-next-line no-undef
      pass: process.env.SMTP_PASS,
    },
  });

  // Vérifie la connexion SMTP
  transporter.verify(function (error) {
    if (error) {
      console.error("Erreur SMTP :", error);
    } else {
      console.log("Connexion SMTP OK");
    }
  });

  const mailOptions = {
    // eslint-disable-next-line no-undef
    from: `"Site Contact" <${process.env.SMTP_USER}>`,
    // eslint-disable-next-line no-undef
    to: process.env.SMTP_USER,
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    replyTo: email,
  };

  try {
    console.log("Envoi mail avec :", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email envoyé !");
    res.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur envoi email :", error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
