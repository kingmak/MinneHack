function viewTabs()
{
    var queryInfo = {lastFocusedWindow: true};

    chrome.tabs.query(queryInfo, function(tabs)
    {
        var currentTabUrl = "";
        var urlLength
        var id = "";
        document.getElementById("openLinks").innerHTML = "";

        for (var i = 0; i < tabs.length; i++)
        {
            id = tabs[i].url.slice(-11);
            urlLength = tabs[i].url.length;
            currentTabUrl = tabs[i].url.slice(0,urlLength-11) + id;
            if(tabs[i].url.indexOf("youtube") > -1) {
                $.getJSON('https://noembed.com/embed',
                    {format: 'json', url: currentTabUrl}, function (data) {
                        $("#openLinks").append("<li> <a href=" + data.url + ">" + data.title + "</a> </li>")
                    });
            }
        }
    });
}

$(document).click(function(){
    var id = document.activeElement.attributes.href.nodeValue.slice(-11);
    var file = "https://www.youtube-nocookie.com/embed/" + id +"?autoplay=1";
    document.getElementById("videoFrame").setAttribute("src",file);
})

viewTabs();

