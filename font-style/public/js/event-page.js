chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!request.action === "showPageAction") return;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.pageAction.show(tabs[0].id);
    });
});


