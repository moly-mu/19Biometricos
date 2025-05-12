const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const app = express();
app.use(express.json());

// Cliente de WhatsApp usando LocalAuth para mantener la sesión
const client = new Client({
    puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox'],
        headless: true,  // Headless para que no se abra la ventana del navegador
    },
    authStrategy: new LocalAuth({
        dataPath: './session' // Guarda los datos de la sesión en esta carpeta
    })
});

// El cliente no pedirá QR después de la primera autenticación exitosa
client.on('ready', () => {
    console.log('✅ Cliente de WhatsApp listo!');
});

client.on('auth_failure', msg => {
    console.error('❌ Falló la autenticación:', msg);
});

// Endpoint para enviar un mensaje
app.post('/enviar-mensaje', async (req, res) => {
    const { numero, mensaje } = req.body;

    if (!numero || !mensaje) {
        return res.status(400).json({ error: 'Faltan el número o el mensaje' });
    }

    try {
        // Formato del número de WhatsApp
        const chatId = `${numero}@c.us`;
        // Envía el mensaje de WhatsApp
        await client.sendMessage(chatId, mensaje);
        res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor del chatbot escuchando en http://localhost:${PORT}`);
});

// Inicializar el cliente de WhatsApp
client.initialize();
