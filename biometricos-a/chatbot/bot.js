const express = require('express');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
app.use(express.json());

const client = new Client({
    puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox'],
        headless: true,
    },
    authStrategy: new LocalAuth({
        dataPath: './session' // Guarda los datos aquí
    })
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('✅ Cliente de WhatsApp listo!');
    try {
        // Obtener el número de teléfono asociado a la cuenta
        const number = await client.getNumberId('00000000000@c.us'); // Tu número con el formato adecuado
        console.log('Número desde el que se enviarán los mensajes:', number._serialized);
    } catch (error) {
        console.error('Error al obtener el número:', error);
    }
});

client.on('auth_failure', msg => {
    console.error('❌ Falló la autenticación:', msg);
});

app.post('/enviar-mensaje', async (req, res) => {
    const { numero, mensaje } = req.body; // Extrae las variables del cuerpo de la solicitud

    if (!numero || !mensaje) {
        return res.status(400).json({ error: 'Faltan el número o el mensaje' });
    }

    try {
        // Envía el mensaje de WhatsApp
        const chatId = `${numero}@c.us`; 
        await client.sendMessage(chatId, mensaje);
        res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor del chatbot escuchando en http://localhost:${PORT}`);
});

client.initialize();
