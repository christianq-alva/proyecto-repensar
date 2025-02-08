// src/js/models/Lead.js
function Lead(nombre, apellido, correo, whatsapp, estado = 'nuevo', curso = '', fechaCarga = new Date().toISOString()) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.whatsapp = whatsapp;
    this.estado = estado;
    this.curso = curso; // Nuevo campo: curso
    this.fechaCarga = fechaCarga;
}

Lead.prototype.updateStatus = function(newStatus) {
    this.estado = newStatus;
};

Lead.prototype.updateCurso = function(newCurso) {
    this.curso = newCurso;
};

Lead.prototype.sendWhatsAppMessage = function(message) {
    const formattedPhone = this.whatsapp.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
};

export default Lead;