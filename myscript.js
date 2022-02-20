const ansObj = JSON.parse(localStorage.getItem(['nyt-wordle-state']));

let ans = ansObj.solution;
ans  = ans.toUpperCase(ans)

chrome.runtime.sendMessage(ans);