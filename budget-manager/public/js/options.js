chrome.storage.sync.get('limit', (budget) => {
    $('#limit').val(budget.limit);
});

$('#save').click(() => {
    chrome.storage.sync.set({
        'limit': $('#limit').val()
    }, () => {
        alert('New limit set!')
    });
});

$('#reset').click(() => {
    if (confirm('Are you sure?')) {
        chrome.storage.sync.set({ 'total': 0 }, () => {
            chrome.notifications.create('limit-reset', {
                type: 'basic',
                iconUrl: '../../assets/icons/48.png',
                title: 'total reset!',
                message: 'Your total has been set to 0.'
            })
        })
    }
});