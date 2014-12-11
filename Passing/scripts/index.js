// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

function showClass(n) {
    //
    var name = "class-";
    name += n.toString();
    //alert(name);
    //document.getElementById(name).className = "opening";
    document.getElementById(name).innerHTML = "<p>LEL</p><p>LEL</p><p>LEL</p><p>LEL</p>"; //include function here to load from a file.
    if (document.getElementById(name).style.maxHeight === "300px") {
        document.getElementById(name).style.maxHeight = "0";
    } else {
        document.getElementById(name).style.maxHeight = "300px";
    }
}

function showClasses() {
    document.getElementById("nav-classes").className = "current";
    document.getElementById("nav-long-term").className = "";
    document.getElementById("nav-settings").className = "";

    document.getElementById("classes").style.display = "block";
    document.getElementById("longTerm").style.display="none";
    document.getElementById("settings").style.display="none";
}
function showLongTerm() {
    document.getElementById("nav-classes").className = "";
    document.getElementById("nav-long-term").className = "current";
    document.getElementById("nav-settings").className = "";

    document.getElementById("classes").style.display="none";
    document.getElementById("longTerm").style.display="block";
    document.getElementById("settings").style.display="none";
}
function showSettings() {
    document.getElementById("nav-classes").className = "";
    document.getElementById("nav-long-term").className = "";
    document.getElementById("nav-settings").className = "current";

    document.getElementById("classes").style.display="none";
    document.getElementById("longTerm").style.display="none";
    document.getElementById("settings").style.display="block";
}

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };


    /*var canvas = document.getElementById("canv");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#293955";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(-1, 41.5); //38 for emulator, 41.5 on physical device
    ctx.bezierCurveTo(0, 38, 32, 39, 32, -5);
    ctx.lineTo(-10, -5);
    ctx.lineTo(-10, 38);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.fillStyle = "#4d6082";
    ctx.fill();
    ctx.strokeStyle = "#233048";
    ctx.stroke();*/

} )();