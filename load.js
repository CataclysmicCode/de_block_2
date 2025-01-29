
function loadExternalJS(TARGET_URL){
    var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    xhr.open('GET', TARGET_URL, false);
    xhr.send(null);
    var code = xhr.responseText;
    var dScript = document.createElement('script');
    try {
        dScript.appendChild( document.createTextNode(parsed) );
        document.body.appendChild(dScript);
    } catch(e) {
        dScript.text = parsed;
        document.getElementsByTagName('head')[0].appendChild(dScript);
    }
    xhr = null;
}

var names = "cute1 cute2 cute3 cute4 cute5 piano splash splash2 underwater wilhelm".split(" ");
for(var i = 0; i < names.length; i++){
    loadExternalJS("https://cdn.jsdelivr.net/gh/CataclysmicCode/collab_audio/js/'+names[i]+'.js");
}
