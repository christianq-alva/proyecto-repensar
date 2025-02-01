function CSVData(headers = [], rows = []) {
    this.headers = headers;
    this.rows = rows;
}

CSVData.prototype.isValid = function() {
    return this.headers.length > 0 && this.rows.length > 0;
};