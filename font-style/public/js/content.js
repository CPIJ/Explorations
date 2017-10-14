chrome.runtime.sendMessage({ action: "showPageAction" })

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!request.action === "changeColor") return;

    $('*').css('color', `#${request.color}`)
})