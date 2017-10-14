chrome.contextMenus.create({
    id: 'speakit',
    title: "Text-to-Speech",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((event) => {
    if (event.menuItemId === 'speakit' && event.selectionText) {
        chrome.tts.speak(event.selectionText);
    }
});