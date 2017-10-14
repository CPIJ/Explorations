let color = $('#color').val();

$('#color').on('change paste keyup', () => {
    color = $('#color').val();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", color: color })
    });
});

$('#change-color').click(() => {

});