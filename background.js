chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    alert("Answer for today's Wordle is"+" "+response);
    chrome.runtime.sendMessage(response);
})