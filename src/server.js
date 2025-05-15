// server.js
import mongoose from 'mongoose';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3030;

try {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('✅ Conectado a MongoDB');

  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
  });
} catch (err) {
  console.error('❌ Error de conexión a MongoDB:', err.message);
  process.exit(1);
}
