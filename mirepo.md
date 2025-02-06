---
repository:
  name: proyecto-repensar
  owner: unknown
  url: ""
generated:
  timestamp: 2025-02-02T02:24:06.190Z
  tool: FlatRepo
statistics:
  totalFiles: 23
  totalLines: 914
  languages:
    markdown: 5
    html: 1
    json: 1
    javascript: 7
    css: 9
  fileTypes:
    .md: 5
    .html: 1
    .json: 1
    .js: 7
    .css: 9
---

===  README.md
```markdown
# proyecto-repensar
```
=== EOF: README.md

===  public/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REPENSAR</title>
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../src/css/main.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <nav class="col-md-2 d-none d-md-block sidebar">
                <h2 class="text-white">REPENSAR</h2>
                <div class="sidebar-menu">
                    <a href="#" class="boton-seleccion"><span class="text-icon-container">
                        <i class="fa-solid fa-user"></i>Leads
                    </span><i class="fa-solid fa-chevron-right"></i></a>
                    <a href="#">Dashboard<i class="fa-solid fa-chevron-right"></i></a>
                    <a href="#">Customers<i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </nav>

            <!-- Main Content -->
            <main class="col-md-10 ms-sm-auto p-4">
                <!-- Header Welcome -->
                <!-- <header class="main-header">
                    <h3>Hello Evano 👋</h3>
                </header> -->

                <!-- Dashboard Cards -->
                <!-- <section class="dashboard-stats">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card-custom">
                                <h4>Total Customers</h4>
                                <p>5,423 <span class="text-success">↑ 16%</span></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-custom">
                                <h4>Members</h4>
                                <p>1,893 <span class="text-danger">↓ 1%</span></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-custom">
                                <h4>Active Now</h4>
                                <p>189</p>
                            </div>
                        </div>
                    </div>
                </section> -->

                <!-- Customers Table -->
                <section class="customers-section mt-4">
                    <h4>Leads</h4>
                    <div style="border: 1px; border-radius: 20px; background-color: white">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>Whatsaspp</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jane Cooper</td>
                                    <td>Microsoft</td>
                                    <td>(225) 555-0118</td>
                                    <td>jane@microsoft.com</td>
                                    <!-- <td><span class="status-active">Active</span></td> -->
                                    <td>
                                        <span class="boton-estado-1">Active</span>
                                        <span class="boton-estado-2">Inactive</span>
                                        <span class="boton-estado-1">Active</span>
                                        <span class="boton-estado-2">Inactive</span>
                                        <span class="boton-estado-1">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Floyd Miles</td>
                                    <td>Yahoo</td>
                                    <td>(205) 555-0100</td>
                                    <td>floyd@yahoo.com</td>
                                    <td><span class="boton-estado-2">Inactive</span></td>
                                </tr>
                                <tr>
                                    <td>Floyd Miles</td>
                                    <td>Yahoo</td>
                                    <td>(205) 555-0100</td>
                                    <td>floyd@yahoo.com</td>
                                    <td><span class="boton-estado-2">Inactive</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- CSV Uploader -->
                <section class="csv-uploader mt-4">
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Importar datos</h4>
                            <button id="openModalBtn" class="btn btn-primary">
                                <i class="fas fa-file-import me-2"></i>Importar CSV
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
<!-- Agregar el modal al final del body, antes de los scripts -->
 <!-- Modal para importar CSV -->
 <div id="csvModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Importar archivo CSV</h4>
            <span class="close-modal">&times;</span>
        </div>
        <div class="file-input-container">
            <input type="file" id="csvFile" accept=".csv" class="form-control" style="display: none;">
            <label for="csvFile" class="btn btn-outline-primary">
                <i class="fas fa-cloud-upload-alt me-2"></i>Seleccionar archivo CSV
            </label>
            <p id="selectedFileName" class="mt-2"></p>
        </div>
        <div id="previewContainer" class="preview-container"></div>
        <div class="modal-footer">
            <button id="cancelImportBtn" class="btn btn-secondary">Cancelar</button>
            <button id="confirmImportBtn" class="btn btn-primary" disabled>Importar datos</button>
        </div>
    </div>
</div>
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- App Scripts -->
    <script src="../src/js/models/CSVData.js"></script>
    <script src="../src/js/utils/storage.js"></script>
    <script src="../src/js/utils/validators.js"></script>
    <script src="../src/js/core/CSVManager.js"></script>
    <script src="../src/js/core/ModalManager.js"></script>
    <script src="../src/js/core/UIManager.js"></script>
    <script src="../src/js/app.js"></script>
</body>
</html>
```
=== EOF: public/index.html

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
# Análisis del Problema

## Descripción del Negocio

- **Sector:** Educación/formación (cursos online).  
- **Modelo de negocio:** Captación de leads mediante Meta Ads y conversión vía WhatsApp.  
- **Necesidad clave:** Digitalizar la gestión de leads para mejorar la eficiencia y el cierre de ventas.  
- **Valor diferencial:** Ofrecer respuestas rápidas y personalizadas según el interés del usuario (ej. cursos técnicos, idiomas, etc.).

---

## Principales Pain Points

1. **Inconsistencia en mensajes:** Dependencia de notas rápidas o textos manuales sin estandarización.  
2. **Retrasos en respuestas:** Tiempo elevado para contactar leads, lo que reduce la tasa de conversión.  
3. **Falta de seguimiento organizado:** Interacciones dispersas en WhatsApp sin registro centralizado.  
4. **Personalización limitada:** Mensajes no adaptados a etapas del funnel o intereses específicos (ej. cursos).  
5. **Dificultad para escalar:** Proceso manual que no soporta un alto volumen de leads.  
6. **Ausencia de métricas:** No hay datos claros sobre la efectividad de mensajes o etapas del funnel.  

---

## Beneficios Esperados

- **Reducción de tiempo de respuesta:** Automatización del primer contacto (ej. mensaje de bienvenida en segundos).  
- **Mejor experiencia del lead:** Mensajes personalizados según su interés y etapa en el funnel.  
- **Seguimiento preciso:** Registro histórico para evitar repeticiones o pérdida de información.  
- **Aumento de conversiones:** Lead nurturing estructurado con plantillas estratégicas.  
- **Escalabilidad:** Manejo de miles de leads sin incrementar el equipo operativo.  
- **Toma de decisiones basada en datos:** Métricas claras para optimizar campañas y mensajes.


# Definición del Alcance

## Funcionalidades Core

- **Gestión de Leads:**
  - Registro automatizado de leads provenientes de Meta Ads.
  - Clasificación de leads según interés.
- **Automatización de Mensajes:**
  - Respuestas automáticas iniciales en WhatsApp según el interés del usuario.
  - Plantillas de mensajes personalizables para diferentes etapas del funnel.
- **Seguimiento y Métricas:**
  - Registro histórico de interacciones con cada lead.
  - Generación de reportes sobre la efectividad de mensajes y conversiones.
- **Escalabilidad:**
  - Soporte para gestionar altos volúmenes de leads sin comprometer la calidad.

---

---

## Entregables Mínimos

1. **Plataforma de Gestión de Leads:**
   - Sistema centralizada para registrar y gestionar leads.  
2. **Sistema de Automatización:**
   - Mensajes configurados para diferentes intereses y etapas del funnel.  
3. **Panel de Métricas:**
   - Dashboard con estadísticas sobre tasas de conversión, tiempos de respuesta y seguimiento.  
```
=== EOF: docs/requirements.md

===  docs/Docs.md
```markdown
# Documentación de la API de Gmail con JavaScript

## Introducción
Esta documentación describe la implementación de la API de Gmail utilizando JavaScript. La API permite interactuar con los correos electrónicos de una cuenta de Google, enviando y recibiendo mensajes de manera programática.

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente:

- Una cuenta de Google.
- Acceso a Google Cloud Console.
- Habilitación de la API de Gmail en el proyecto de Google Cloud.
- Configuración de credenciales OAuth 2.0.
- Un servidor local o entorno de desarrollo con soporte para JavaScript.

## Configuración de la API de Gmail

### 1. Habilitar la API de Gmail
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente.
3. Navega a **API y Servicios** > **Biblioteca**.
4. Busca "Gmail API" y habilítala.

### 2. Configurar Credenciales
1. En **API y Servicios**, ve a **Credenciales**.
2. Crea una nueva credencial de tipo **OAuth 2.0**.
3. Configura la pantalla de consentimiento con la información de tu aplicación.
4. Descarga el archivo `credentials.json` y guárdalo en tu proyecto.

## Implementación en JavaScript

### 1. Cargar el Cliente de Google
```javascript
function loadGmailApi() {
    gapi.client.load('gmail', 'v1', () => {
        console.log('Gmail API cargada correctamente');
    });
}
```

### 2. Autenticación del Usuario
```javascript
function authenticate() {
    return gapi.auth2.getAuthInstance().signIn().then(() => {
        console.log("Usuario autenticado");
    });
}
```

### 3. Enviar un Correo Electrónico
```javascript
function sendEmail() {
    const email = `
From: me
To: destinatario@example.com
Subject: Prueba API Gmail

Este es un correo enviado desde la API de Gmail con JavaScript.
`;
    const base64EncodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    
    gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': base64EncodedEmail
        }
    }).then(response => {
        console.log("Correo enviado", response);
    }).catch(error => {
        console.error("Error al enviar correo", error);
    });
}
```

## Conclusión
Esta documentación proporciona una guía básica para integrar la API de Gmail en una aplicación JavaScript. Se pueden agregar más funcionalidades, como la gestión de etiquetas y la recuperación de correos electrónicos, según las necesidades del proyecto.
```
=== EOF: docs/Docs.md

===  .vscode/settings.json
```json
{
    "liveServer.settings.port": 5501
}
```
=== EOF: .vscode/settings.json

===  src/js/app.js
```javascript
 (function() {    
    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        try {
            const csvManager = new CSVManager();
            const uiManager = new UIManager(csvManager);
            const modalManager = new ModalManager(csvManager, uiManager);
            
            // Cargar datos guardados si existen
            const savedData = csvManager.loadFromStorage();
            if (savedData) {
                uiManager.displayData(savedData);
            }
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
        }
    });
})();
```
=== EOF: src/js/app.js

===  src/css/main.css
```css
@import 'components/sidebar.css';
@import 'components/cards.css';
@import 'components/table.css';
@import 'components/buttons.css';
@import 'components/status.css';
@import 'utils/responsive.css';
@import 'utils/base.css';
@import 'components/modal.css';
```
=== EOF: src/css/main.css

===  src/js/utils/validators.js
```javascript
const validators = {
    isValidFile: function(file) {
        return file && file.name.endsWith('.csv');
    },
    
    isValidData: function(data) {
        return data && Array.isArray(data.rows) && Array.isArray(data.headers);
    }
};
```
=== EOF: src/js/utils/validators.js

===  src/js/utils/storage.js
```javascript
const StorageService = {
    STORAGE_KEY: 'csvData',
    
    save: function(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },
    
    load: function() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading data:', error);
            return null;
        }
    },
    
    clear: function() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};
```
=== EOF: src/js/utils/storage.js

===  src/js/models/CSVData.js
```javascript
function CSVData(headers = [], rows = []) {
    this.headers = headers;
    this.rows = rows;
}

CSVData.prototype.isValid = function() {
    return this.headers.length > 0 && this.rows.length > 0;
};
```
=== EOF: src/js/models/CSVData.js

===  src/css/utils/responsive.css
```css
@media (max-width: 768px) {
    .sidebar {
        min-height: auto;
        padding: 10px;
    }
    
    .sidebar a {
        padding: 8px;
    }
    
    .card-custom {
        margin-bottom: 20px;
    }
    
    .table {
        font-size: 14px;
    }
    
    .table thead {
        display: none;
    }
    
    .table tbody,
    .table tr,
    .table td {
        display: block;
        width: 100%;
    }
    
    .table td {
        text-align: right;
        padding-left: 50%;
        position: relative;
    }
    
    .table td::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-weight: bold;
        text-align: left;
    }
}
```
=== EOF: src/css/utils/responsive.css

===  src/css/utils/base.css
```css
* {
    font-family: 'Poppins', sans-serif;
}

body {
    font-family: Arial, sans-serif;
    background-color: rgb(250, 251, 255,100);
}

.container {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}
```
=== EOF: src/css/utils/base.css

===  src/js/core/UIManager.js
```javascript
function UIManager(csvManager) {
    this.csvManager = csvManager;
    this.tableContainer = document.getElementById('tableContainer');
    this.fileInput = document.getElementById('csvFile');
    this.bindEvents();
}

UIManager.prototype.bindEvents = function() {
    document.getElementById('loadButton').addEventListener('click', () => this.handleLoadData());
    document.getElementById('clearButton').addEventListener('click', () => this.handleClearData());
};

UIManager.prototype.handleLoadData = function() {
    const file = this.fileInput.files[0];
    if (!file) {
        alert('Por favor, selecciona un archivo CSV');
        return;
    }

    this.csvManager.loadFromFile(file)
        .then(data => this.displayData(data))
        .catch(error => alert(error.message));
};

UIManager.prototype.handleClearData = function() {
    this.csvManager.clearData();
    this.clearDisplay();
};

UIManager.prototype.displayData = function(data) {
    if (!data || !data.isValid()) return;

    let tableHTML = '<table>';
    
    // Headers
    tableHTML += '<tr>';
    data.headers.forEach(header => {
        tableHTML += `<th>${header}</th>`;
    });
    tableHTML += '</tr>';

    // Rows
    data.rows.forEach(row => {
        tableHTML += '<tr>';
        data.headers.forEach(header => {
            tableHTML += `<td>${row[header]}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</table>';
    this.tableContainer.innerHTML = tableHTML;
};

UIManager.prototype.clearDisplay = function() {
    this.tableContainer.innerHTML = '';
    this.fileInput.value = '';
};
```
=== EOF: src/js/core/UIManager.js

===  src/js/core/ModalManager.js
```javascript
function ModalManager(csvManager, uiManager) {
    this.initialize(csvManager, uiManager);
}

ModalManager.prototype.initialize = function(csvManager, uiManager) {
    // Obtener referencias a los elementos del DOM
    this.modal = document.getElementById('csvModal');
    this.openBtn = document.getElementById('openModalBtn');
    this.closeBtn = document.querySelector('.close-modal');
    this.cancelBtn = document.getElementById('cancelImportBtn');
    this.confirmBtn = document.getElementById('confirmImportBtn');
    this.fileInput = document.getElementById('csvFile');
    this.previewContainer = document.getElementById('previewContainer');
    this.selectedFileName = document.getElementById('selectedFileName');
    
    // Verificar si todos los elementos necesarios existen
    if (!this.modal || !this.openBtn || !this.closeBtn || !this.cancelBtn || 
        !this.confirmBtn || !this.fileInput || !this.previewContainer || !this.selectedFileName) {
        console.error('No se pudieron encontrar todos los elementos necesarios para el modal');
        return;
    }

    this.csvManager = csvManager;
    this.uiManager = uiManager;
    this.previewData = null;

    // Solo bindear eventos si todos los elementos existen
    this.bindEvents();
};

ModalManager.prototype.bindEvents = function() {
    // Resto del código igual que antes
    this.openBtn.addEventListener('click', () => this.openModal());
    this.closeBtn.addEventListener('click', () => this.closeModal());
    this.cancelBtn.addEventListener('click', () => this.closeModal());
    this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
    this.confirmBtn.addEventListener('click', () => this.handleImport());
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === this.modal) {
            this.closeModal();
        }
    });
};

function ModalManager(csvManager, uiManager) {
    this.modal = document.getElementById('csvModal');
    this.openBtn = document.getElementById('openModalBtn');
    this.closeBtn = document.querySelector('.close-modal');
    this.cancelBtn = document.getElementById('cancelImportBtn');
    this.confirmBtn = document.getElementById('confirmImportBtn');
    this.fileInput = document.getElementById('csvFile');
    this.previewContainer = document.getElementById('previewContainer');
    this.selectedFileName = document.getElementById('selectedFileName');
    this.csvManager = csvManager;
    this.uiManager = uiManager;
    this.previewData = null;

    this.bindEvents();
}

ModalManager.prototype.bindEvents = function() {
    this.openBtn.addEventListener('click', () => this.openModal());
    this.closeBtn.addEventListener('click', () => this.closeModal());
    this.cancelBtn.addEventListener('click', () => this.closeModal());
    this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
    this.confirmBtn.addEventListener('click', () => this.handleImport());
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === this.modal) {
            this.closeModal();
        }
    });
};

ModalManager.prototype.openModal = function() {
    this.modal.style.display = 'block';
};

ModalManager.prototype.closeModal = function() {
    this.modal.style.display = 'none';
    this.resetModal();
};

ModalManager.prototype.resetModal = function() {
    this.fileInput.value = '';
    this.selectedFileName.textContent = '';
    this.previewContainer.innerHTML = '';
    this.confirmBtn.disabled = true;
    this.previewData = null;
};

ModalManager.prototype.handleFileSelect = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFileName.textContent = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const csvData = this.csvManager.parseCSV(e.target.result);
            // Mostrar solo las primeras 5 filas en la previsualización
            this.previewData = {
                headers: csvData.headers,
                rows: csvData.rows.slice(0, 5),
                allRows: csvData.rows
            };
            this.showPreview();
            this.confirmBtn.disabled = false;
        } catch (error) {
            alert('Error al procesar el archivo CSV');
            this.resetModal();
        }
    };
    reader.readAsText(file);
};

ModalManager.prototype.showPreview = function() {
    if (!this.previewData) return;

    let tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    ${this.previewData.headers.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${this.previewData.rows.map(row => `
                    <tr>
                        ${this.previewData.headers.map(header => `<td>${row[header] || ''}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <p class="preview-info">Mostrando ${this.previewData.rows.length} de ${this.previewData.allRows.length} registros</p>
    `;
    
    this.previewContainer.innerHTML = tableHTML;
};

ModalManager.prototype.handleImport = function() {
    if (!this.previewData) return;

    // Actualizar la tabla principal con todos los datos
    const csvData = new CSVData(this.previewData.headers, this.previewData.allRows);
    this.csvManager.currentData = csvData;
    StorageService.save(csvData);
    
    // Actualizar la tabla de Leads
    const leadsTable = document.querySelector('.customers-section table tbody');
    if (leadsTable) {
        leadsTable.innerHTML = '';
        csvData.rows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.Nombres || ''}</td>
                <td>${row.Apellidos || ''}</td>
                <td>${row.Correo || ''}</td>
                <td>${row.Whatsapp || ''}</td>
                <td><span class="boton-estado-1">Active</span></td>
            `;
            leadsTable.appendChild(tr);
        });
    }

    this.closeModal();
};
```
=== EOF: src/js/core/ModalManager.js

===  src/js/core/CSVManager.js
```javascript
function CSVManager() {
    this.currentData = null;
}

CSVManager.prototype.parseCSV = function(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        
        const currentLine = lines[i].split(',');
        const obj = {};

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j]?.trim() || '';
        }
        rows.push(obj);
    }

    this.currentData = new CSVData(headers, rows);
    return this.currentData;
};

CSVManager.prototype.loadFromFile = function(file) {
    return new Promise((resolve, reject) => {
        if (!validators.isValidFile(file)) {
            reject(new Error('Formato de archivo inválido. Por favor, seleccione un archivo CSV.'));
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const csvData = this.parseCSV(event.target.result);
                StorageService.save(csvData);
                resolve(csvData);
            } catch (error) {
                reject(new Error('Error al procesar el archivo CSV'));
            }
        };
        reader.onerror = () => reject(new Error('Error al leer el archivo'));
        reader.readAsText(file);
    });
};

CSVManager.prototype.loadFromStorage = function() {
    const savedData = StorageService.load();
    if (savedData && validators.isValidData(savedData)) {
        this.currentData = new CSVData(savedData.headers, savedData.rows);
        return this.currentData;
    }
    return null;
};

CSVManager.prototype.clearData = function() {
    this.currentData = null;
    StorageService.clear();
};
```
=== EOF: src/js/core/CSVManager.js

===  src/css/components/table.css
```css
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px;
}

th, td {
    /* border: 1px solid #ddd; */
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
```
=== EOF: src/css/components/table.css

===  src/css/components/status.css
```css
.status-active {
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.status-inactive {
    background-color: #dc3545;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}
```
=== EOF: src/css/components/status.css

===  src/css/components/sidebar.css
```css
.sidebar {
    min-height: 100vh;
    background-color: rgb(255, 255, 255, 100);
    padding: 20px;
}

.sidebar a {
    color: rgb(145, 151,179, 100);
    text-decoration: none;
    padding: 14px;
    border-radius: 8px;
    margin: 18px;
    display: flex; /* Usamos flexbox para organizar el contenido */
    align-items: center; /* Centra verticalmente el texto y el ícono */
    justify-content: space-between; /* Espacio entre el texto y el ícono */
}

.sidebar a i {
    font-size: 1.2em; /* Mueve el ícono a la derecha */
}

.sidebar a i.fa-solid.fa-user {
    margin-right: 10px; /* Espacio entre el ícono de la izquierda y el texto */
}

.sidebar a .text-icon-container {
    display: flex;
    align-items: center;
}

.sidebar a .text-icon-container i {
    margin-right: 8px; /* Ajustamos el margen del icono para alinearlo mejor */
    vertical-align: middle; /* Alinea verticalmente el ícono con el texto */
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
```
=== EOF: src/css/components/sidebar.css

===  src/css/components/modal.css
```css
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    position: relative;
    background-color: #fff;
    margin: 5% auto;
    padding: 20px;
    width: 80%;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 600;
}

.close-modal {
    cursor: pointer;
    font-size: 1.5rem;
    color: #666;
}

.preview-container {
    max-height: 400px;
    overflow-y: auto;
    margin: 20px 0;
}

.file-input-container {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.preview-info {
    font-size: 0.875rem;
    color: #666;
    margin-top: 10px;
}
```
=== EOF: src/css/components/modal.css

===  src/css/components/cards.css
```css
.card-custom {
    border-radius: 15px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```
=== EOF: src/css/components/cards.css

===  src/css/components/buttons.css
```css
.buttons {
    margin: 20px 0;
}

button {
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
}

.boton-estado-1{
    color: rgb(0, 135, 103, 100); 
    border-radius: 5px;
    background-color: rgba(38, 216, 175, 0.38);
    padding: 2px 16px;
    border-color: rgb(0, 176, 135, 100); 
    border-width: 1px;
    border-style: solid;
    font-weight: 400;
    font-size: 16px;
}

.boton-estado-2{
    color: rgb(223, 4, 4, 100); 
    border-radius: 5px;
    background-color: rgba(255, 197, 197, 100);
    padding: 2px 16px;
    border-color: rgb(223, 4, 4, 100); 
    border-width: 1px;
    border-style: solid;
    font-weight: 400;
    font-size: 16px;
}


```
=== EOF: src/css/components/buttons.css

