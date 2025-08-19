export function saveProgress(page, isMarked) {
  return new Promise((resolve, reject) => {
    const storage = require('@system.storage');
    storage.set({
      key: 'readingProgress',
      value: JSON.stringify({ page, isMarked }),
      success: resolve,
      fail: reject
    });
  });
}

export function getSavedProgress() {
  return new Promise((resolve) => {
    const storage = require('@system.storage');
    storage.get({
      key: 'readingProgress',
      success: (data) => {
        resolve(data ? JSON.parse(data) : { page: 1, isMarked: false });
      },
      fail: () => {
        resolve({ page: 1, isMarked: false }); 
      }
    });
  });
}