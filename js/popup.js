function getCurrentTabUrl(callback)
{
  var queryInfo = { active: true, currentWindow: true };
  //var queryInfo = { 'lastFocusedWindow': true };

  chrome.tabs.query(queryInfo, function(tabs)
  {
    var allTabs = "";

    var tab = tabs[0];
    var url = tab.url;
    /*
    for (i = 0; i < tabs.length; i++)
    {
      allTabs += tabs[i].url + "\n";
    }
    */
    callback(url);
  });
}

function renderStatus(statusText)
{
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function()
{
  getCurrentTabUrl(function(url)
  {
    renderStatus('Link is: ' + url);
  });
});