import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import hotels from "../../db/Hotels.json";

const email = {
  user: "marcosiegman01@gmail.com",
  pass: "galleta001",
};
const sendEmail = (subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: email,
  });

  const mailOptions = {
    from: email.user,
    to: "thedarkmayck115@gmail.com",
    subject,
    text,
  };

  return new Promise((resolve, reject) =>
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
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
        message: 400,
      });
    }
  } else {
    res.status(404).json({
      message: "Not allowed",
    });
  }
};
