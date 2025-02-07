---
repository:
  name: proyecto-repensar
  owner: unknown
  url: ""
generated:
  timestamp: 2025-02-07T20:57:30.240Z
  tool: FlatRepo
statistics:
  totalFiles: 6
  totalLines: 575
  languages:
    html: 2
    markdown: 4
  fileTypes:
    .html: 2
    .md: 4
---

===  index.html
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM - Gestión de Contactos</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <style>
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            min-height: 100vh;
            background-color: rgb(255, 255, 255, 100);
            min-width: 300px;
            z-index: 10;
        }

        .sidebar a {
            text-decoration: none;
            padding: 14px;
            border-radius: 8px;
            margin: 18px;
            display: flex;
            /* Usamos flexbox para organizar el contenido */
            align-items: center;
            /* Centra verticalmente el texto y el ícono */
            justify-content: space-between;
            /* Espacio entre el texto y el ícono */

        }

        .sidebar a i {
            font-size: 1.2em;
            /* Mueve el ícono a la derecha */
        }

        .sidebar a i.fa-solid.fa-user {
            margin-right: 10px;
            /* Espacio entre el ícono de la izquierda y el texto */
        }

        .sidebar a .text-icon-container {
            display: flex;
            align-items: center;
        }

        .sidebar a .text-icon-container i {
            margin-right: 8px;
            /* Ajustamos el margen del icono para alinearlo mejor */
            vertical-align: middle;
            /* Alinea verticalmente el ícono con el texto */
        }

        .sidebar a:hover {
            background-color: #495057;
            color: rgb(255, 255, 255, 100);
        }

        /* Falta que permanezca el cambio de color al seleccionar una opcion del menu */

        .boton-seleccion {
            background-color: rgba(94, 80, 248, 1);
            color: white;
        }

        /* Cuando se hace clic en el botón */
        .boton-seleccion:active,
        .boton-seleccion:focus {
            background-color: rgb(94, 80, 248, 1);
            color: white;
        }

        .hidden-column {
            display: none;
        }

        @media (max-width: 768px) {
            .responsive-table {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
            }
        }

        .estado-nuevo {
            background-color: #ffffff;
        }

        .estado-iniciado {
            background-color: #93c5fd;
        }

        .estado-en-proceso {
            background-color: #fcd34d;
        }

        .estado-exitoso {
            background-color: #6ee7b7;
        }

        .estado-no-desea {
            background-color: #fca5a5;
        }

        .estado-num-incorrecto {
            background-color: #d1d5db;
        }

        #main-content {
            margin-left: 300px;
            min-width: 820px;
            /* Ajustado para tener en cuenta el margen */
            padding: 2rem;
        }

        #logo {
            background-color: rgb(94, 80, 248, 1);
            border-radius: 0px 0px 20px 20px;
            padding: 0.4rem;
        }
        
    </style>
</head>

<body class="bg-gray-100">
    <div class="flex w-auto">
        <!-- Aside -->
        <nav class="col-md-2 d-none d-md-block sidebar">
            <div class="flex items-center justify-center mb-6" id="logo">
                <img src="./images/logo.png" alt="">
            </div>
            <div class="sidebar-menu">
                <a href="index.html" class="boton-seleccion"><span class="text-icon-container">
                        <i class="fa-solid fa-user"></i>Leads
                    </span><i class="fa-solid fa-chevron-right"></i></a>
                <a href="estadisticas.html">Dashboard<i class="fa-solid fa-chevron-right"></i></a>
                <a href="#">Customers<i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </nav>
        <main class="mx-auto p-8" id="main-content">
            <h1 class="text-2xl md:text-3xl font-bold mb-6">Sistema CRM</h1>
            <div class="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
                <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div class="flex-grow">
                        <input type="file" id="csvFile" accept=".csv" class="mb-4 p-2 border rounded w-full">
                        <button onclick="loadCSV()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Cargar CSV
                        </button>
                    </div>
                    <button onclick="clearSystem()"
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto">
                        Limpiar Sistema
                    </button>
                </div>
            </div>

            <div class="mb-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <!-- <a href="estadisticas.html" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Ver Estadísticas
                </a> -->
                <div class="flex flex-wrap gap-2">
                    <select id="statusFilter" onchange="filterContacts()" class="border rounded px-3 py-1">
                        <option value="">Todos los estados</option>
                        <option value="nuevo">Nuevo</option>
                        <option value="iniciado">Iniciado</option>
                        <option value="en proceso">En Proceso</option>
                        <option value="exitoso">Exitoso</option>
                        <option value="no desea">No Desea</option>
                        <option value="num incorrecto">Número Incorrecto</option>
                    </select>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow overflow-x-auto responsive-table">
                <table class="min-w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre</th>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Apellido</th>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Correo</th>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                WhatsApp</th>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado</th>
                            <th
                                class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones</th>
                            <th class="hidden-column">Fecha Carga</th>
                        </tr>
                    </thead>
                    <tbody id="contactTable" class="bg-white divide-y divide-gray-200"></tbody>
                </table>
            </div>

        </main>


    </div>

    <script>
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).replace(/\//g, '-');
        }

        function clearSystem() {
            if (confirm('¿Estás seguro de que deseas limpiar todo el sistema? Esta acción no se puede deshacer.')) {
                localStorage.removeItem('contacts');
                document.getElementById('contactTable').innerHTML = '';
                document.getElementById('csvFile').value = '';
                document.getElementById('statusFilter').value = '';
            }
        }

        function filterContacts() {
            displayContacts();
        }

        function getStatusClass(status) {
            const statusMap = {
                'nuevo': 'estado-nuevo',
                'iniciado': 'estado-iniciado',
                'en proceso': 'estado-en-proceso',
                'exitoso': 'estado-exitoso',
                'no desea': 'estado-no-desea',
                'num incorrecto': 'estado-num-incorrecto'
            };
            return statusMap[status] || 'estado-nuevo';
        }

        function loadCSV() {
            const fileInput = document.getElementById('csvFile');
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const csvData = event.target.result;
                    const contacts = parseCSV(csvData);
                    saveToLocalStorage(contacts);
                    displayContacts();
                };
                reader.readAsText(file);
            }
        }

        function parseCSV(csvData) {
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
        }

        function saveToLocalStorage(contacts) {
            const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            const updatedContacts = [...existingContacts, ...contacts];
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        }

        function updateContactStatus(index, newStatus) {
            const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            contacts[index].estado = newStatus;
            localStorage.setItem('contacts', JSON.stringify(contacts));
            displayContacts();
        }

        function sendWhatsAppMessage(phone, message) {
            const formattedPhone = phone.replace(/\D/g, '');
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
        }

        function displayContacts() {
            const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            const tableBody = document.getElementById('contactTable');
            const statusFilter = document.getElementById('statusFilter').value;
            tableBody.innerHTML = '';

            const filteredContacts = statusFilter
                ? contacts.filter(contact => contact.estado === statusFilter)
                : contacts;

            filteredContacts.forEach((contact, index) => {
                const row = document.createElement('tr');
                row.className = getStatusClass(contact.estado);
                row.innerHTML = `
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.nombre}</td>
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.apellido}</td>
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.correo}</td>
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.whatsapp}</td>
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">${contact.estado}</td>
                    <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div class="flex flex-wrap gap-2">
                            <button onclick="handleAction('bienvenida', ${index})" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">Bienvenida</button>
                            <button onclick="handleAction('seguimiento', ${index})" class="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Seguimiento</button>
                            <button onclick="handleAction('cierre-ok', ${index})" class="bg-green-500 text-white px-2 py-1 rounded text-sm">Cierre OK</button>
                            <button onclick="handleAction('cierre-fail', ${index})" class="bg-red-500 text-white px-2 py-1 rounded text-sm">Cierre Fail</button>
                            <button onclick="handleAction('errado', ${index})" class="bg-gray-500 text-white px-2 py-1 rounded text-sm">Errado</button>
                        </div>
                    </td>
                    <td class="hidden-column">${formatDate(contact.fechaCarga)}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        function handleAction(action, index) {
            const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            const contact = contacts[index];
            const fullName = `${contact.nombre} ${contact.apellido}`;

            switch (action) {
                case 'bienvenida':
                    sendWhatsAppMessage(contact.whatsapp, `${fullName} - Bienvenida`);
                    updateContactStatus(index, 'iniciado');
                    break;
                case 'seguimiento':
                    sendWhatsAppMessage(contact.whatsapp, `${fullName} - Seguimiento`);
                    updateContactStatus(index, 'en proceso');
                    break;
                case 'cierre-ok':
                    sendWhatsAppMessage(contact.whatsapp, `${fullName} - Cierre OK`);
                    updateContactStatus(index, 'exitoso');
                    break;
                case 'cierre-fail':
                    sendWhatsAppMessage(contact.whatsapp, `${fullName} - Cierre Fail`);
                    updateContactStatus(index, 'no desea');
                    break;
                case 'errado':
                    updateContactStatus(index, 'num incorrecto');
                    break;
            }
        }

        // Cargar contactos al iniciar
        document.addEventListener('DOMContentLoaded', displayContacts);
    </script>
</body>

</html>
```
=== EOF: index.html

===  estadisticas.html
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM - Estadísticas</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>

    <style>
        .sidebar {
            min-height: 100vh;
            background-color: rgb(255, 255, 255, 100);
            min-width: 300px;
        }

        .sidebar a {
            text-decoration: none;
            padding: 14px;
            border-radius: 8px;
            margin: 18px;
            display: flex;
            /* Usamos flexbox para organizar el contenido */
            align-items: center;
            /* Centra verticalmente el texto y el ícono */
            justify-content: space-between;
            /* Espacio entre el texto y el ícono */
        }

        .sidebar a i {
            font-size: 1.2em;
            /* Mueve el ícono a la derecha */
        }

        .sidebar a i.fa-solid.fa-user {
            margin-right: 10px;
            /* Espacio entre el ícono de la izquierda y el texto */
        }

        .sidebar a .text-icon-container {
            display: flex;
            align-items: center;
        }

        .sidebar a .text-icon-container i {
            margin-right: 8px;
            /* Ajustamos el margen del icono para alinearlo mejor */
            vertical-align: middle;
            /* Alinea verticalmente el ícono con el texto */
        }

        .sidebar a:hover {
            background-color: #495057;
            color: rgb(255, 255, 255, 100);
        }

        /* Falta que permanezca el cambio de color al seleccionar una opcion del menu */

        .boton-seleccion {
            background-color: rgba(94, 80, 248, 1);
            color: white;
        }

        /* Cuando se hace clic en el botón */
        .boton-seleccion:active,
        .boton-seleccion:focus {
            background-color: rgb(94, 80, 248, 1);
            color: white;
        }
        #logo{
            background-color: rgb(94, 80, 248, 1);
            border-radius: 0px 0px 20px 20px;
            padding: 0.4rem;
        }
    </style>
</head>

<body class="bg-gray-100">
    <div class="flex w-auto">
        <!-- Aside -->
        <nav class="col-md-2 d-none d-md-block sidebar">
            <div class="flex items-center justify-center mb-6" id="logo">
                <img src="./images/logo.png" alt="">
            </div>
            <div class="sidebar-menu">
                <a href="index.html"><span class="text-icon-container">
                        <i class="fa-solid fa-user"></i>Leads
                    </span><i class="fa-solid fa-chevron-right"></i></a>
                <a href="estadisticas.html" class="boton-seleccion">Dashboard<i class="fa-solid fa-chevron-right"></i></a>
                <a href="#">Customers<i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </nav>
        <!-- Main -->
        <main class="w-full p-8">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">Estadísticas del CRM</h1>
                <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Volver al CRM
                </a>
            </div>

            <div class="flex gap-6">
                <div class="bg-white p-6 rounded-lg shadow" style="height: 80%">
                    <h2 class="text-xl font-semibold mb-4">Estado de Contactos</h2>
                    <canvas id="statusChart"></canvas>
                </div>

                <div class="bg-white p-6 rounded-lg shadow w-full">
                    <h2 class="text-xl font-semibold mb-4">Contactos por Día</h2>
                    <canvas id="timelineChart"></canvas>
                </div>
            </div>
        </main>
    </div>


    <script>
        function getContactStats() {
            const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

            // Estadísticas por estado
            const statusStats = contacts.reduce((acc, contact) => {
                acc[contact.estado] = (acc[contact.estado] || 0) + 1;
                return acc;
            }, {});

            // Estadísticas por día
            const timelineStats = contacts.reduce((acc, contact) => {
                const date = new Date(contact.fechaCarga).toLocaleDateString();
                acc[date] = (acc[date] || 0) + 1;
                return acc;
            }, {});

            return { statusStats, timelineStats };
        }

        function createStatusChart(stats) {
            const ctx = document.getElementById('statusChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(stats),
                    datasets: [{
                        data: Object.values(stats),
                        backgroundColor: [
                            '#60A5FA', // nuevo
                            '#34D399', // iniciado
                            '#FBBF24', // en proceso
                            '#10B981', // exitoso
                            '#EF4444', // no desea
                            '#6B7280', // num incorrecto
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        function createTimelineChart(stats) {
            const ctx = document.getElementById('timelineChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Object.keys(stats),
                    datasets: [{
                        label: 'Contactos agregados',
                        data: Object.values(stats),
                        borderColor: '#60A5FA',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const { statusStats, timelineStats } = getContactStats();
            createStatusChart(statusStats);
            createTimelineChart(timelineStats);
        });
    </script>
</body>

</html>
```
=== EOF: estadisticas.html

===  README.md
```markdown
# proyecto-repensar
```
=== EOF: README.md

===  docs/user-stories.md
```markdown

```
=== EOF: docs/user-stories.md

===  docs/team.md
```markdown
# Asignación de Roles del Proyecto

| **Rol**            | **Encargado** |
|---------------------|---------------|
| **Documentación**  | Christian     |
| **Frontend**       | Daniel        |
| **Gestión de Datos** | Carlos       |
| **Líder Técnico**  | Christian     |
```
=== EOF: docs/team.md

===  docs/requirements.md
```markdown

```
=== EOF: docs/requirements.md

