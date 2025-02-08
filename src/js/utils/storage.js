// src/js/utils/storage.js
function StorageManager() {}

StorageManager.prototype.saveContacts = function(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
};

StorageManager.prototype.getContacts = function() {
    return JSON.parse(localStorage.getItem('contacts') || '[]');
};

StorageManager.prototype.clearContacts = function() {
    localStorage.removeItem('contacts');
};

export default StorageManager;