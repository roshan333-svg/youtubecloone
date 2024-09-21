document.getElementById('file').addEventListener('change', function() {
    const statusIndicator = document.getElementById('file-status');
    if (this.files.length > 0) {
        statusIndicator.textContent = '✔️'; // Green tick
        statusIndicator.className = 'status-indicator success';
    } else {
        statusIndicator.textContent = '❌'; // Red cross
        statusIndicator.className = 'status-indicator error';
    }
});
