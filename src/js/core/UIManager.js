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
        row.className = this.getStatusClass(contact.estado);
        row.innerHTML = `
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.nombre}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.apellido}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.correo}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.whatsapp}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.estado}</td>
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.curso || "Curso no asignado"}</td> <!-- Validación aquí -->
            <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                <div class="flex flex-wrap gap-2">
                    <button onclick="handleAction('bienvenida', ${index})" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">Bienvenida</button>
                    <button onclick="handleAction('seguimiento', ${index})" class="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Seguimiento</button>
                    <button onclick="handleAction('cierre-ok', ${index})" class="bg-green-500 text-white px-2 py-1 rounded text-sm">Cierre OK</button>
                    <button onclick="handleAction('cierre-fail', ${index})" class="bg-red-500 text-white px-2 py-1 rounded text-sm">Cierre Fail</button>
                    <button onclick="handleAction('errado', ${index})" class="bg-gray-500 text-white px-2 py-1 rounded text-sm">Errado</button>
                    <select onchange="changeCurso(${index}, this.value)" class="border rounded px-2 py-1 text-sm">
                        <option value="">Cambiar Curso</option>
                        <option value="Diseño">Diseño</option>
                        <option value="UI">UI</option>
                        <option value="UI Avanzado">UI Avanzado</option>
                    </select>
                </div>
            </td>
            <td class="hidden-column">${this.formatDate(contact.fechaCarga)}</td>
        `;
        tableBody.appendChild(row);
    });
};

UIManager.prototype.getStatusClass = function(status) {
    const statusMap = {
        'nuevo': 'estado-nuevo',
        'iniciado': 'estado-iniciado',
        'en proceso': 'estado-en-proceso',
        'exitoso': 'estado-exitoso',
        'no desea': 'estado-no-desea',
        'num incorrecto': 'estado-num-incorrecto'
    };
    return statusMap[status] || 'estado-nuevo';
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