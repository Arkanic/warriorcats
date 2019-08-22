let prefixes = [];
let suffixes = [];
let prefix = "";
let suffix = "";

var rawFile = new XMLHttpRequest();
rawFile.open("GET", "file:///text/prefixes.txt", false);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4) {
    if(rawFile.status === 200 || rawFile.status == 0) {
      var allText = rawFile.responseText;
      prefixes = allText.split("\n");
    }
  }
}
rawFile.send(null);
var rawFile = new XMLHttpRequest();
rawFile.open("GET", "file:///text/suffixes.txt", false);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4) {
    if(rawFile.status === 200 || rawFile.status == 0) {
      var allText = rawFile.responseText;
      suffixes = allText.split("\n");
    }
  }
}
rawFile.send(null);

function display() {
  document.getElementById("name-text").innerHTML = prefix + suffix;
}

function changePrefix() {
  prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  display();
}
function changeSuffix() {
  suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  display();
}
function changeAll() {
  changePrefix();
  changeSuffix();
  display();
}

function init() {
  changeAll();
}
