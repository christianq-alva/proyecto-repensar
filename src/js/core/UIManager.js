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