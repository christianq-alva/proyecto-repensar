---
repository:
  name: proyecto-repensar
  owner: unknown
  url: ""
generated:
  timestamp: 2025-01-31T02:17:47.959Z
  tool: FlatRepo
statistics:
  totalFiles: 21
  totalLines: 597
  languages:
    css: 9
    markdown: 4
    json: 1
    html: 1
    javascript: 6
  fileTypes:
    .css: 9
    .md: 4
    .json: 1
    .html: 1
    .js: 6
---

===  style.css
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}
.sidebar {
    min-height: 100vh;
    background-color: #343a40;
    padding: 20px;
}
.sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px;
    border-radius: 5px;
}
.sidebar a:hover {
    background-color: #495057;
}
.card-custom {
    border-radius: 15px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
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

/* Estilos para el cargador de CSV */
.container {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
th {
    background-color: #f2f2f2;
}
.buttons {
    margin: 20px 0;
}
button {
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
}

/* Media Queries for Responsive Design */
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
    .table tbody, .table tr, .table td {
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
=== EOF: style.css

===  README.md
```markdown
# proyecto-repensar
```
=== EOF: README.md

===  .vscode/settings.json
```json
{
    "liveServer.settings.port": 5501
}
```
=== EOF: .vscode/settings.json

===  proyecto-repensar/public/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../src/css/main.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <nav class="col-md-2 d-none d-md-block sidebar">
                <h2 class="text-white">Dashboard</h2>
                <div class="sidebar-menu">
                    <a href="#" class="active">Dashboard</a>
                    <a href="#">Product</a>
                    <a href="#" class="bg-primary">Customers</a>
                    <a href="#">Income</a>
                    <a href="#">Promote</a>
                    <a href="#">Help</a>
                </div>
            </nav>

            <!-- Main Content -->
            <main class="col-md-10 ms-sm-auto p-4">
                <!-- Header Welcome -->
                <header class="main-header">
                    <h3>Hello Evano 👋</h3>
                </header>

                <!-- Dashboard Cards -->
                <section class="dashboard-stats">
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
                </section>

                <!-- Customers Table -->
                <section class="customers-section mt-4">
                    <h4>All Customers</h4>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jane Cooper</td>
                                    <td>Microsoft</td>
                                    <td>(225) 555-0118</td>
                                    <td>jane@microsoft.com</td>
                                    <td>United States</td>
                                    <td><span class="status-active">Active</span></td>
                                </tr>
                                <tr>
                                    <td>Floyd Miles</td>
                                    <td>Yahoo</td>
                                    <td>(205) 555-0100</td>
                                    <td>floyd@yahoo.com</td>
                                    <td>Kiribati</td>
                                    <td><span class="status-inactive">Inactive</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- CSV Uploader -->
                <section class="csv-uploader mt-4">
                    <div class="container">
                        <h4>Cargador de archivos CSV</h4>
                        <div class="upload-container">
                            <input type="file" id="csvFile" accept=".csv" class="form-control">
                            <div class="buttons mt-3">
                                <button id="loadButton" class="btn btn-primary">Cargar CSV</button>
                                <button id="clearButton" class="btn btn-secondary">Limpiar datos</button>
                            </div>
                            <div id="tableContainer" class="mt-4"></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- App Scripts -->
    <script src="../src/js/models/CSVData.js"></script>
    <script src="../src/js/utils/storage.js"></script>
    <script src="../src/js/utils/validators.js"></script>
    <script src="../src/js/core/CSVManager.js"></script>
    <script src="../src/js/core/UIManager.js"></script>
    <script src="../src/js/app.js"></script>
</body>
</html>
```
=== EOF: proyecto-repensar/public/index.html

===  proyecto-repensar/docs/user-stories.md
```markdown

```
=== EOF: proyecto-repensar/docs/user-stories.md

===  proyecto-repensar/docs/team.md
```markdown
# Asignación de Roles del Proyecto

| **Rol**            | **Encargado** |
|---------------------|---------------|
| **Documentación**  | Christian     |
| **Frontend**       | Daniel        |
| **Gestión de Datos** | Carlos       |
| **Líder Técnico**  | Christian     |
```
=== EOF: proyecto-repensar/docs/team.md

===  proyecto-repensar/docs/requirements.md
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
=== EOF: proyecto-repensar/docs/requirements.md

===  proyecto-repensar/src/js/app.js
```javascript
(function() {    
    document.addEventListener('DOMContentLoaded', function() {
        const csvManager = new CSVManager();
        const uiManager = new UIManager(csvManager);
        
        // Cargar datos guardados si existen
        const savedData = csvManager.loadFromStorage();
        if (savedData) {
            uiManager.displayData(savedData);
        }
    });
})();
```
=== EOF: proyecto-repensar/src/js/app.js

===  proyecto-repensar/src/css/main.css
```css
@import 'components/sidebar.css';
@import 'components/cards.css';
@import 'components/table.css';
@import 'components/buttons.css';
@import 'components/status.css';
@import 'utils/responsive.css';
@import 'utils/base.css';
```
=== EOF: proyecto-repensar/src/css/main.css

===  proyecto-repensar/src/js/utils/validators.js
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
=== EOF: proyecto-repensar/src/js/utils/validators.js

===  proyecto-repensar/src/js/utils/storage.js
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
=== EOF: proyecto-repensar/src/js/utils/storage.js

===  proyecto-repensar/src/js/core/UIManager.js
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
=== EOF: proyecto-repensar/src/js/core/UIManager.js

===  proyecto-repensar/src/js/core/CSVManager.js
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
=== EOF: proyecto-repensar/src/js/core/CSVManager.js

===  proyecto-repensar/src/js/models/CSVData.js
```javascript
function CSVData(headers = [], rows = []) {
    this.headers = headers;
    this.rows = rows;
}

CSVData.prototype.isValid = function() {
    return this.headers.length > 0 && this.rows.length > 0;
};
```
=== EOF: proyecto-repensar/src/js/models/CSVData.js

===  proyecto-repensar/src/css/utils/responsive.css
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
=== EOF: proyecto-repensar/src/css/utils/responsive.css

===  proyecto-repensar/src/css/utils/base.css
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}

.container {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}
```
=== EOF: proyecto-repensar/src/css/utils/base.css

===  proyecto-repensar/src/css/components/table.css
```css
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
```
=== EOF: proyecto-repensar/src/css/components/table.css

===  proyecto-repensar/src/css/components/status.css
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
=== EOF: proyecto-repensar/src/css/components/status.css

===  proyecto-repensar/src/css/components/sidebar.css
```css
.sidebar {
    min-height: 100vh;
    background-color: #343a40;
    padding: 20px;
}

.sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px;
    border-radius: 5px;
}

.sidebar a:hover {
    background-color: #495057;
}
```
=== EOF: proyecto-repensar/src/css/components/sidebar.css

===  proyecto-repensar/src/css/components/cards.css
```css
.card-custom {
    border-radius: 15px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```
=== EOF: proyecto-repensar/src/css/components/cards.css

===  proyecto-repensar/src/css/components/buttons.css
```css
.buttons {
    margin: 20px 0;
}

button {
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
}
```
=== EOF: proyecto-repensar/src/css/components/buttons.css

