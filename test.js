document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex

        let canvas = document.createElement('canvas');

        canvas.id = "CursorLayer";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.zIndex = 8;

        let context = canvas.getContext('2d');
        
        context.fillRect(10, 10, 100, 100);

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);

        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});