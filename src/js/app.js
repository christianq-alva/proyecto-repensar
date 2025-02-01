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