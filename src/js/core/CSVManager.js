// src/js/core/CSVManager.js
function CSVManager() {}

CSVManager.prototype.parseCSV = function(csvData) {
    const lines = csvData.split('\n');
    return lines.slice(1).map(line => {
        const [nombre, apellido, correo, whatsapp] = line.split(',');
        return {
            nombre: nombre?.trim(),
            apellido: apellido?.trim(),
            correo: correo?.trim(),
            whatsapp: whatsapp?.trim(),
            estado: 'nuevo',
            fechaCarga: new Date().toISOString()
        };
    }).filter(contact => contact.nombre && contact.apellido);
};

export default CSVManager;