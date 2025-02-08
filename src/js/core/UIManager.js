// src/js/core/UIManager.js
function UIManager() {}

// src/js/app.js
UIManager.prototype.displayContacts = function(contacts, statusFilter = '', cursoFilter = '') {
    const tableBody = document.getElementById('contactTable');
    tableBody.innerHTML = '';

    const filteredContacts = contacts.filter(contact => {
        const matchesStatus = statusFilter ? contact.estado === statusFilter : true;
        const matchesCurso = cursoFilter ? contact.curso === cursoFilter : true;
        return matchesStatus && matchesCurso;
    });

    filteredContacts.forEach((contact, index) => {
        console.log(contact)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">${contact.nombre}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">${contact.apellido}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">${contact.correo}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">${contact.whatsapp}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${this.getStatusButtonClass(contact.estado)}">${contact.estado}</span>
            </td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">${contact.curso || "Sin asignar"}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                <div class="flex flex-wrap gap-1.5">
                    <button onclick="openMessageModal('bienvenida', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-200">Bienvenida</button>
                    <button onclick="openMessageModal('seguimiento', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-yellow-700 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200">Seguimiento</button>
                    <button onclick="openMessageModal('cierre-ok', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-green-700 bg-green-50 hover:bg-green-100 transition-colors duration-200">Cierre OK</button>
                    <button onclick="openMessageModal('cierre-fail', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 transition-colors duration-200">Cierre Fail</button>
                    <button onclick="openMessageModal('errado', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">Errado</button>
                    <select onchange="changeCurso(${index}, this.value)" class="text-xs border rounded-md px-2 py-1 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <option value="">Cambiar Curso</option>
                        <option value="Diseño">Diseño</option>
                        <option value="UI">UI</option>
                        <option value="UI Avanzado">UI Avanzado</option>
                    </select>
                </div>
            </td>
            <td class="hidden-column text-sm">${this.formatDate(contact.fechaCarga)}</td>
        `;
        tableBody.appendChild(row);
    });
};

UIManager.prototype.getStatusButtonClass = function(status) {
    const statusMap = {
        'nuevo': 'text-blue-700 bg-blue-50',
        'iniciado': 'text-yellow-700 bg-yellow-50',
        'en proceso': 'text-yellow-700 bg-yellow-50',
        'exitoso': 'text-green-700 bg-green-50',
        'no desea': 'text-red-700 bg-red-50',
        'num incorrecto': 'text-gray-700 bg-gray-50'
    };
    return statusMap[status] || 'text-blue-700 bg-blue-50';
};

UIManager.prototype.formatDate = function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '-');
};

    // Add modal HTML if it doesn't exist
    if (!document.getElementById('messageModal')) {
        const modal = document.createElement('div');
        modal.id = 'messageModal';
        modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 hidden flex items-center justify-center';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 w-full max-w-lg">
                <h3 class="text-lg font-medium mb-4">Editar Mensaje</h3>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Sugerencias de mensajes:</label>
                    <div id="messageSuggestions" class="space-y-2 mb-4"></div>
                </div>
                <textarea id="messageText" class="w-full h-32 p-2 border rounded-md mb-4" placeholder="Escribe tu mensaje aquí"></textarea>
                <div class="flex justify-end space-x-3">
                    <button onclick="closeMessageModal()" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancelar</button>
                    <button onclick="sendMessage()" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Enviar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

export default UIManager;