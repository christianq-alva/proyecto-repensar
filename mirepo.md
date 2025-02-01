---
repository:
  name: proyecto-repensar
  owner: unknown
  url: ""
generated:
  timestamp: 2025-01-31T01:16:53.561Z
  tool: FlatRepo
statistics:
  totalFiles: 7
  totalLines: 351
  languages:
    css: 1
    html: 1
    markdown: 4
    json: 1
  fileTypes:
    .css: 1
    .html: 1
    .md: 4
    .json: 1
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

===  index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 d-none d-md-block sidebar">
                <h2 class="text-white">Dashboard</h2>
                <a href="#">Dashboard</a>
                <a href="#">Product</a>
                <a href="#" class="bg-primary">Customers</a>
                <a href="#">Income</a>
                <a href="#">Promote</a>
                <a href="#">Help</a>
            </nav>
            <main class="col-md-10 ms-sm-auto p-4">
                <h3>Hello Evano 👋</h3>
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
                <div class="mt-4">
                    <h4>All Customers</h4>
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
                <div class="container mt-4">
                    <h1>Cargador de archivos CSV</h1>
                    <input type="file" id="csvFile" accept=".csv">
                    <div class="buttons">
                        <button onclick="loadData()">Cargar CSV</button>
                        <button onclick="clearData()">Limpiar datos</button>
                    </div>
                    <div id="tableContainer"></div>
                </div>
            </main>
        </div>
    </div>

    <script>
        // Cargar datos del localStorage al iniciar
        document.addEventListener('DOMContentLoaded', () => {
            const savedData = localStorage.getItem('csvData');
            if (savedData) {
                displayData(JSON.parse(savedData));
            }
        });

        function loadData() {
            const fileInput = document.getElementById('csvFile');
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const csvData = event.target.result;
                    const data = parseCSV(csvData);
                    
                    // Guardar en localStorage
                    localStorage.setItem('csvData', JSON.stringify(data));
                    
                    // Mostrar los datos
                    displayData(data);
                };
                reader.readAsText(file);
            } else {
                alert('Por favor, selecciona un archivo CSV');
            }
        }

        function parseCSV(csv) {
            const lines = csv.split('\n');
            const result = [];
            const headers = lines[0].split(',').map(header => header.trim());

            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '') continue;
                
                const obj = {};
                const currentLine = lines[i].split(',');

                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentLine[j].trim();
                }
                result.push(obj);
            }
            return result;
        }

        function displayData(data) {
            if (!data || data.length === 0) return;

            const headers = Object.keys(data[0]);
            let tableHTML = '<table>';
            
            // Cabeceras
            tableHTML += '<tr>';
            headers.forEach(header => {
                tableHTML += `<th>${header}</th>`;
            });
            tableHTML += '</tr>';

            // Datos
            data.forEach(row => {
                tableHTML += '<tr>';
                headers.forEach(header => {
                    tableHTML += `<td>${row[header]}</td>`;
                });
                tableHTML += '</tr>';
            });

            tableHTML += '</table>';
            document.getElementById('tableContainer').innerHTML = tableHTML;
        }

        function clearData() {
            localStorage.removeItem('csvData');
            document.getElementById('tableContainer').innerHTML = '';
            document.getElementById('csvFile').value = '';
        }
    </script>
</body>
</html>
```
=== EOF: index.html

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

===  .vscode/settings.json
```json
{
    "liveServer.settings.port": 5501
}
```
=== EOF: .vscode/settings.json

