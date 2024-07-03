import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
  try {
    console.log('Iniciando envío de correo electrónico...');
    
    // Verifica que la solicitud tenga los campos necesarios
    const { recipient, selectedPDFs } = req.body;
    if (!recipient || !selectedPDFs || !Array.isArray(selectedPDFs)) {
      return res.status(400).json({ message: 'Faltan campos requeridos o están en un formato incorrecto' });
    }

    // Configura el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.utags.edu.mx',
      port: 587,
      secure: false,
      auth: {
        user: '210294@utags.edu.mx',
        pass: 'cascarr16',
      },
      debug: true,
      logger: true,
      level: 'info'
    });    

    // Configura el correo electrónico
    const mailOptions = {
      from: '210294@utags.edu.mx',
      to: recipient,
      subject: 'Asunto del correo electrónico',
      text: 'Cuerpo del correo electrónico',
      attachments: selectedPDFs.map(pdf => ({
        filename: pdf.split('/').pop(),
        path: pdf,
      })),
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado correctamente.');
    res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico', error: error.message });
  }
};
