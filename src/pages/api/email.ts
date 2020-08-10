import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import hotels from "../../db/Hotels.json";

const email = {
  user: "marcosiegman01@gmail.com",
  pass: "galleta001",
};

const sendEmail = async (subject: string, text: string) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const mailOptions = {
    from: email.user,
    to: "marcosiegman01@gmail.com",
    subject,
    text,
  };

  return new Promise((resolve, reject) =>
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        console.log(info);
        resolve(true);
      }
    })
  );
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const params: EmailData = JSON.parse(req.body);
      const hotelSelected = hotels.find(
        (hotel) => String(hotel.id) === params.selectedHotelId
      );
      const emialHasSended = await sendEmail(
        "Mensaje de contacto desde www.Sahuaygo.com.mx",
        `   Alguien se ha puesto en contacto desde la página web para realizar una reservación.
          
            Nombre: ${params.name}
            Email: ${params.email}
            Phone: ${params.phone}
            Mensaje: ${params.message}
            Hotel seleccionado: ${hotelSelected.name}
        `
      );

      res.status(200).json({
        message: "Email sended",
        emialHasSended,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  } else {
    res.status(404).json({
      message: "Not allowed",
    });
  }
};
