const validators = {
    isValidFile: function(file) {
        return file && file.name.endsWith('.csv');
    },
    
    isValidData: function(data) {
        return data && Array.isArray(data.rows) && Array.isArray(data.headers);
    }
};