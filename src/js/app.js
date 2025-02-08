// src/js/app.js
import Lead from './models/Lead.js';
import CSVManager from './core/CSVManager.js';
import UIManager from './core/UIManager.js';
import StorageManager from './utils/storage.js';

const csvManager = new CSVManager();
const uiManager = new UIManager();
const storageManager = new StorageManager();

document.addEventListener('DOMContentLoaded', () => {
    const contacts = storageManager.getContacts();
    uiManager.displayContacts(contacts);
});

// src/js/app.js
window.loadCSV = function() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const csvData = event.target.result;
            const contacts = csvManager.parseCSV(csvData);
            
            // Reemplazar esto:
            // saveToLocalStorage(contacts);
            
            // Por esto:
            const existingContacts = storageManager.getContacts();
            const updatedContacts = [...existingContacts, ...contacts];
            storageManager.saveContacts(updatedContacts); // <-- Usar StorageManager
            
            uiManager.displayContacts(storageManager.getContacts());
        };
        reader.readAsText(file);
    }
};

window.clearSystem = function() {
    if (confirm('¿Estás seguro de que deseas limpiar todo el sistema? Esta acción no se puede deshacer.')) {
        storageManager.clearContacts();
        document.getElementById('contactTable').innerHTML = '';
        document.getElementById('csvFile').value = '';
        document.getElementById('statusFilter').value = '';
    }
};

// src/js/app.js
window.filterContacts = function() {
    const statusFilter = document.getElementById('statusFilter').value;
    const cursoFilter = document.getElementById('cursoFilter').value;
    const contacts = storageManager.getContacts();
    uiManager.displayContacts(contacts, statusFilter, cursoFilter);
};

// src/js/app.js
window.changeCurso = function(index, newCurso) {
    if (newCurso && ["Diseño", "UI", "UI Avanzado"].includes(newCurso)) {
        const contacts = storageManager.getContacts();
        console.log("newcurso, ", newCurso);
        const lead = new Lead(
            contacts[index].nombre,
            contacts[index].apellido,
            contacts[index].correo,
            contacts[index].whatsapp,
            contacts[index].estado,
            newCurso, // Actualizar el curso
            contacts[index].fechaCarga
        );
        contacts[index] = lead;
        storageManager.saveContacts(contacts);
        uiManager.displayContacts(contacts);
    } else {
        alert("Por favor, selecciona un curso válido.");
    }
};

window.handleAction = function(action, index) {
    const contacts = storageManager.getContacts();
    const contact = contacts[index];
    const lead = new Lead(contact.nombre, contact.apellido, contact.correo, contact.whatsapp, contact.estado, contact.curso ,contact.fechaCarga);
    console.log("curso", contact)
    switch (action) {
        case 'bienvenida':
            lead.sendWhatsAppMessage(`${lead.nombre} ${lead.apellido} - Bienvenida`);
            lead.updateStatus('iniciado');
            break;
        case 'seguimiento':
            lead.sendWhatsAppMessage(`${lead.nombre} ${lead.apellido} - Seguimiento`);
            lead.updateStatus('en proceso');
            break;
        case 'cierre-ok':
            lead.sendWhatsAppMessage(`${lead.nombre} ${lead.apellido} - Cierre OK`);
            lead.updateStatus('exitoso');
            break;
        case 'cierre-fail':
            lead.sendWhatsAppMessage(`${lead.nombre} ${lead.apellido} - Cierre Fail`);
            lead.updateStatus('no desea');
            break;
        case 'errado':
            lead.updateStatus('num incorrecto');
            break;
    }

    contacts[index] = lead;
    storageManager.saveContacts(contacts);
    uiManager.displayContacts(contacts);
};