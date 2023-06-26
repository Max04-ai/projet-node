const nodemailer = require("nodemailer");

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre_adresse_email@gmail.com",
    pass: "votre_mot_de_passe",
  },
});

// Fonction pour envoyer l'e-mail
const sendWelcomeEmail = (email, username) => {
  const mailOptions = {
    from: "votre_adresse_email@gmail.com",
    to: email,
    subject: "Bienvenue dans notre application",
    text: `Bonjour ${username},\n\nBienvenue dans notre application. Merci de vous être inscrit !`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erreur lors de l'envoi de l'e-mail : ", error);
    } else {
      console.log("E-mail envoyé avec succès :", info.response);
    }
  });
};

// Exemple d'utilisation de la fonction sendWelcomeEmail
const newUser = {
  email: "nouvel_utilisateur@example.com",
  username: "Nouvel Utilisateur",
};

sendWelcomeEmail(newUser.email, newUser.username);
const nodemailer = require("nodemailer");


 // const { email, username } = req.body;

  // Configuration du transporteur SMTP
//  const transporter = nodemailer.createTransport({
//    service: "gmail",
//    auth: {
//      user: "votre_adresse_email@gmail.com",
//      pass: "votre_mot_de_passe",
//    },
//  });

// try {
    // Envoi de l'e-mail
//    const mailOptions = {
//      from: "votre_adresse_email@gmail.com",
//      to: email,
//      subject: "Bienvenue dans notre application",
 //     text: `Bonjour ${username},\n\nBienvenue dans notre application. Merci de vous être inscrit !`,
//    };

//    await transporter.sendMail(mailOptions);
//    console.log("E-mail envoyé avec succès");
    
//    res.status(200).json({ message: "E-mail envoyé avec succès" });
//  } catch (error) {
//    console.log("Erreur lors de l'envoi de l'e-mail :", error);
//    res.status(500).json({ error: "Une erreur s'est produite lors de l'envoi de l'e-mail" });
//  }
//};

module.exports = {
  sendWelcomeEmail,
};

