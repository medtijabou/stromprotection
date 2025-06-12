import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  // Configure ton transporter SMTP (exemple avec Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tijarim7@gmail.com",       // Ton email
      pass: "pekx ycwn qoce xliq",    // Mot de passe ou token d'application Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: "tijarim7@gmail.com", // Ton adresse email de réception
    subject: `Nouveau message de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
