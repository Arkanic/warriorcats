let prefixes = ["hai", "hoi"];
let suffixes = ["ree", "m8"];
let prefix = "";
let suffix = "";

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
