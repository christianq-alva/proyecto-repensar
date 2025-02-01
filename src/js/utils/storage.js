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