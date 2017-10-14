const id = "spend-money"

chrome.contextMenus.create({
    "id": id,
    "title": "SpendMoney",
    "contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener((event) => {
    if (!event.menuItemId === id && !event.selectionText) alert("Niet ons item"); return;
    if (!isInt(event.selectionText)) alert("Geen int"); return;

    chrome.storage.sync.get(['total', 'limit'], (budget) => {
        let newTotal = 0;

        if (budget.total) {
            newTotal += parseInt(buget.total);
        }

        newTotal += parseInt(event.selectionText);

        chrome.storage.sync.set({ 'total': newTotal }, () => {
            if (newTotal > budget.limit) {
                chrome.notifications.create('limit-reached', {
                    type: 'basic',
                    iconUrl: '../../assets/icons/48.png',
                    title: 'Limit reached!',
                    message: 'You have reached your limit.'
                })
            };
        });
    });
});

chrome.storage.onChanged.addListener((changes, storageName) => {
    chrome.browserAction.setBadgeText({ "text": changes.total.newValue.toString() })
})

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}