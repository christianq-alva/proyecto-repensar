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
                    <button onclick="handleAction('bienvenida', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-200">Bienvenida</button>
                    <button onclick="handleAction('seguimiento', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-yellow-700 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200">Seguimiento</button>
                    <button onclick="handleAction('cierre-ok', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-green-700 bg-green-50 hover:bg-green-100 transition-colors duration-200">Cierre OK</button>
                    <button onclick="handleAction('cierre-fail', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 transition-colors duration-200">Cierre Fail</button>
                    <button onclick="handleAction('errado', ${index})" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">Errado</button>
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

export default UIManager;