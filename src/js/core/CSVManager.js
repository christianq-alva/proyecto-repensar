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