/**
 * Created by Min on 2016-02-22.
 */


document.addEventListener("DOMContentLoaded", init);

function init() {
    var jq = document.createElement("script");
    jq.addEventListener("load", loadCount);
    jq.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
    document.querySelector("head").appendChild(jq);
}

//upload jQuery library

function loadCount() {
    this.count = 0;
    this.count++;

    if(this.count === 1) {
        callAJAX("http://kim00341.edumedia.ca/mad9022/chart_data/browsers.json");
    }
}



function callAJAX(url) {

    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);

    window.chartJSON = JSON.parse(Httpreq.responseText);

    if (chartJSON) {
        alert("!");
    } else {
        alert("no data");
    }
}