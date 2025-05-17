const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/patients', require('./routes/pacientes'));
app.use('/api/doctors', require('./routes/medicos'));
app.use('/api/appointments', require('./routes/citas'));
app.use('/api/consultations', require('./routes/consultas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
