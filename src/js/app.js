// src/js/app.js
import Lead from './models/Lead.js';
import CSVManager from './core/CSVManager.js';
import UIManager from './core/UIManager.js';
import StorageManager from './utils/storage.js';
import MessageModal from './components/MessageModal.js';

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

const messageModal = new MessageModal();

window.handleAction = function(action, index) {
    const contacts = storageManager.getContacts();
    const contact = contacts[index];
    const lead = new Lead(contact.nombre, contact.apellido, contact.correo, contact.whatsapp, contact.estado, contact.curso, contact.fechaCarga);
    
    if (action === 'errado') {
        lead.updateStatus('num incorrecto');
        contacts[index] = lead;
        storageManager.saveContacts(contacts);
        uiManager.displayContacts(contacts);
        return;
    }

    messageModal.showModal(action, lead);
    contacts[index] = lead;
    storageManager.saveContacts(contacts);
    uiManager.displayContacts(contacts);
};