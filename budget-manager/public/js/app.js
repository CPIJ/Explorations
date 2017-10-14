chrome.storage.sync.get(['total', 'limit'], (budget) => {
    $('#total-spent').text(budget.total);
    $('#limit').text(budget.limit);
});

$('#spend').click(() => {
    chrome.storage.sync.get(['total', 'limit'], (budget) => {
        let newTotal = 0;

        if (budget.total) {
            newTotal += parseInt(budget.total);
        }

        newTotal += parseInt($('#amount').val());

        chrome.storage.sync.set({ 'total': newTotal }, () => {
            if (newTotal > budget.limit) {
                chrome.notifications.create('limit-reached', {
                    type: 'basic',
                    iconUrl: '../../assets/icons/48.png',
                    title: 'Limit reached!',
                    message: 'You have reached your limit.'
                })
            }
        });

        $('#total-spent').text(newTotal);
    });
});