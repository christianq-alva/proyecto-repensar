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

let currentMessageIndex = null;
let currentMessageType = null;

window.openMessageModal = function(type, index) {
    currentMessageIndex = index;
    currentMessageType = type;
    const modal = document.getElementById('messageModal');
    const messageSuggestions = document.getElementById('messageSuggestions');
    const messageText = document.getElementById('messageText');
    
    // Clear previous suggestions
    messageSuggestions.innerHTML = '';
    
    // Get message suggestions based on type
    const suggestions = getMessageSuggestions(type);
    
    // Add suggestion buttons
    suggestions.forEach(suggestion => {
        const button = document.createElement('button');
        button.className = 'w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200';
        button.textContent = suggestion;
        button.onclick = () => messageText.value = suggestion;
        messageSuggestions.appendChild(button);
    });
    
    modal.classList.remove('hidden');
};

window.closeMessageModal = function() {
    const modal = document.getElementById('messageModal');
    modal.classList.add('hidden');
    currentMessageIndex = null;
    currentMessageType = null;
};

window.sendMessage = function() {
    if (currentMessageIndex === null || currentMessageType === null) return;
    
    const messageText = document.getElementById('messageText').value;
    handleAction(currentMessageType, currentMessageIndex, messageText);
    closeMessageModal();
};

function getMessageSuggestions(type) {
    const suggestions = {
        'bienvenida': [
            '¡Hola! Bienvenido/a a nuestro curso. Estamos emocionados de tenerte con nosotros.',
            '¡Saludos! Gracias por tu interés en nuestro curso. ¿Tienes alguna pregunta inicial?'
        ],
        'seguimiento': [
            '¿Qué tal va todo con el curso? ¿Necesitas ayuda con algo en particular?',
            'Hola, ¿cómo estás avanzando? Estamos aquí para apoyarte en lo que necesites.'
        ],
        'cierre-ok': [
            '¡Felicitaciones por completar el curso! Ha sido un placer tenerte como estudiante.',
            'Gracias por tu compromiso con el curso. ¡Te deseamos muchos éxitos!'
        ],
        'cierre-fail': [
            'Lamentamos que no hayas podido continuar. ¿Hay algo en lo que podamos ayudarte?',
            'Entendemos tu decisión. Esperamos verte en otra oportunidad.'
        ],
        'errado': [
            'Parece que hay un problema con el número de contacto. ¿Podrías verificarlo?',
            'No pudimos contactarte. ¿Podrías confirmar tu número correcto?'
        ]
    };
    return suggestions[type] || [];
};

// Modify the existing handleAction function
window.handleAction = function(action, index, customMessage = '') {
    const contacts = storageManager.getContacts();
    const contact = contacts[index];
    const lead = new Lead(contact.nombre, contact.apellido, contact.correo, contact.whatsapp, contact.estado, contact.curso, contact.fechaCarga);
    
    if (customMessage) {
        lead.sendWhatsAppMessage(customMessage);
    } else {
        lead.sendWhatsAppMessage(`${lead.nombre} ${lead.apellido} - ${action}`);
    }
    
    switch (action) {
        case 'bienvenida':
            lead.updateStatus('iniciado');
            break;
        case 'seguimiento':
            lead.updateStatus('en proceso');
            break;
        case 'cierre-ok':
            lead.updateStatus('exitoso');
            break;
        case 'cierre-fail':
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