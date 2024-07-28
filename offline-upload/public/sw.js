self.addEventListener('sync', function(event) {
    if (event.tag === 'syncUploads') {
        event.waitUntil(syncData());
    }
});

function syncData() {
    return new Promise((resolve, reject) => {
        let db;
        const request = indexedDB.open('localDB', 1);

        request.onsuccess = function(event) {
            db = event.target.result;
            const transaction = db.transaction(['uploads'], 'readwrite');
            const store = transaction.objectStore('uploads');
            const getAll = store.getAll();

            getAll.onsuccess = function() {
                const uploads = getAll.result;
                const uploadPromises = uploads.map(upload => {
                    return fetch('/api/upload', {
                        method: 'POST',
                        body: JSON.stringify(upload),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            const deleteTransaction = db.transaction(['uploads'], 'readwrite');
                            const deleteStore = deleteTransaction.objectStore('uploads');
                            deleteStore.delete(upload.id);
                        }
                    });
                });

                Promise.all(uploadPromises).then(() => resolve()).catch(() => reject());
            };

            getAll.onerror = function() {
                reject();
            };
        };

        request.onerror = function(event) {
            reject();
        };
    });
}

