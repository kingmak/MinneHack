function viewTabs()
{
    var queryInfo = {lastFocusedWindow: true};

    chrome.tabs.query(queryInfo, function(tabs)
    {
        var currentTabUrl = "";
        document.getElementById("openLinks").innerHTML = "";
        
        for (i = 0; i < tabs.length; i++)
        {
            document.getElementById("openLinks").innerHTML += "<li>" + tabs[i].title + "</li>";
        }
    });
}

function popupStatus(statusText)
{
    document.getElementById('StatusLabel').textContent = statusText;
}

viewTabs();

// FUNCTION CHAINGING is messed up
document.getElementById("SaveLinks").addEventListener("click", function() { SaveLinks() });
