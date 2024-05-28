document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', function() {
        // Get the current tab and then execute the script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['content.js']
            });
        });
    });
});

