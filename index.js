$(document).ready(function(){
    $.getJSON("tabs.json", function(tabs) {
        tabs.forEach(tab => {
            
            let element = "<div id=\""+tab.name+"\" class=\"tabcontent\"><webview style=\"height: 90vh;\" src=\""+tab.url+"\"></webview></div>"
            let tabbera
            if(tab.default){
                tabbera = "<button class=\"tablinks\" onclick=\"openCity(event, '"+tab.name+"')\">"+tab.name+"</button>"
            }else{
                tabbera = "<button class=\"tablinks\" id=\"default\" onclick=\"openCity(event, '"+tab.name+"')\">"+tab.name+"</button>"
            }
            $("#tabs").append(element)
            $("#tab").append(tabbera)
        });
    });

    document.getElementById("default").click()
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}