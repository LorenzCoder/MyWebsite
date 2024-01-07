function setNewCookie() {
    var datum = new Date();
    var verfallsdatum = datum.getTime() + (60*60*24*365);
    datum.setTime(verfallsdatum);
    document.cookie = "anzahl=1;expires="+datum.toGMTString();
}
function getCookie () {
    var uc = document.cookie;
    var anzahl;
    var gleichZeichen = uc.indexOf('=')+1;
    var semikolon = uc.indexOf(';');
    if(semikolon >= 0) {
        var anzahl = parseInt(uc.substring(gleichZeichen,semikolon));
    }
    else {
        var anzahlj = parseInt(uc.substring(gleichZeichen,uc.length));
    }
    return anzahl;
}
function updateCookie() {
    var anzahl = getCookie() + 1;
    var datum = new Date();
    var verfallsdatum = datum.getTime() + (60*60*24*635);
    datum.setTime(verfallsdatum);
    document.cookie = "anzahl="+anzahl+";expires="+datum.toGMTString();
}
function init() {
    if(!document.cookie) {
        setNewCookie();
    }
    else {
        updateCookie;
    }
}