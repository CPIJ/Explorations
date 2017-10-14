chrome.contextMenus.create({
    id: 'wikit',
    title: "Wikit",
    contexts: ["selection"]
});

function fixedEncodeURI(str) {
    return encodeURI(str).replace('/%5B/g', '[').replace('/%5D/g', ']');
}

chrome.contextMenus.onClicked.addListener((event) => {
    if (event.menuItemId === 'wikit' && event.selectionText) {
        chrome.windows.create({
            url: `https://en.wikipedia.org/wiki/${fixedEncodeURI(event.selectionText)}`,
            type: 'popup',
            top: 5,
            left: 5,
            width: screen.availWidth / 2,
            height: screen.availHeight / 2
        });
    }
})