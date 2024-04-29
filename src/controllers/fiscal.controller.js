import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
  const { recipient,selectedPDFs } = req.body;

  // Configura el transporter de nodemailer (puedes ajustar los detalles según tu servidor de correo)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'maxcarrillo1616@gmail.com',
      pass: 'Maximiliano1616#',
    },
  });

  // Configura el correo electrónico
  const mailOptions = {
    from: 'maxcarrillo1616@gmail.com',
    to: recipient,
    attachments: selectedPDFs.map(pdf => ({
      filename: pdf.split('/').pop(), // Nombre del archivo PDF
      path: pdf, // Ruta al archivo PDF
    })),
  };

  try {
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico' });
  }
};
