document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        symptoms: document.getElementById('symptoms').value,
        oralPH: document.getElementById('oralPH').value,
        plagueIndex: document.getElementById('plagueIndex').value,
        gingivalIndex: document.getElementById('gingivalIndex').value,
        thalassemia: document.getElementById('thalassemia').checked,
        vitaminDeficiency: document.getElementById('vitaminDeficiency').checked,
        ironDeficiency: document.getElementById('ironDeficiency').checked,
        prescription: document.getElementById('prescription').value
    };

    if (isOnline()) {
        sendDataToServer(formData);
    } else {
        storeDataLocally(formData);
    }

    clearForm();
});

document.getElementById('oralButton').addEventListener('click', function() {
    document.getElementById('oralSection').style.display = 'block';
    document.getElementById('hbLevelSection').style.display = 'none';
    this.classList.add('active');
    document.getElementById('hbLevelButton').classList.remove('active');
});

document.getElementById('hbLevelButton').addEventListener('click', function() {
    document.getElementById('hbLevelSection').style.display = 'block';
    document.getElementById('oralSection').style.display = 'none';
    this.classList.add('active');
    document.getElementById('oralButton').classList.remove('active');
});

function isOnline() {
    return window.navigator.onLine;
}

function storeDataLocally(data) {
    let db;
    const request = indexedDB.open('localDB', 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains('uploads')) {
            db.createObjectStore('uploads', { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        const transaction = db.transaction(['uploads'], 'readwrite');
        const store = transaction.objectStore('uploads');
        store.add(data);
    };

    request.onerror = function(event) {
        console.log('Error opening IndexedDB:', event);
    };
}

function sendDataToServer(data) {
    fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Error sending data');
        }
    }).catch(error => {
        console.error('Network error:', error);
        storeDataLocally(data);
    });
}

navigator.serviceWorker.register('/sw.js').then(function(registration) {
    if ('sync' in registration) {
        return registration.sync.register('syncUploads');
    }
});

window.addEventListener('online', syncData);

function syncData() {
    let db;
    const request = indexedDB.open('localDB', 1);

    request.onsuccess = function(event) {
        db = event.target.result;
        const transaction = db.transaction(['uploads'], 'readwrite');
        const store = transaction.objectStore('uploads');
        const getAll = store.getAll();

        getAll.onsuccess = function() {
            const uploads = getAll.result;
            uploads.forEach(upload => {
                sendDataToServer(upload);
                const deleteTransaction = db.transaction(['uploads'], 'readwrite');
                const deleteStore = deleteTransaction.objectStore('uploads');
                deleteStore.delete(upload.id);
            });
        };
    };
}

function clearForm() {
    document.getElementById('uploadForm').reset();
}
