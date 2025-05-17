const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});


// Rutas
app.use('/api/patients', require('../backend/routes/pacientes'));
app.use('/api/doctors', require('../backend/routes/medicos'));
app.use('/api/appointments', require('../backend/routes/citas'));
app.use('/api/consultations', require('../backend/routes/consultas'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
