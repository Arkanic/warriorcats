wc = {};
wc.prefixes = ["", ""];
wc.suffixes = ["", ""];
wc.prefix = "";
wc.suffix = "";

wc.display = function() {
  document.getElementById("name-text").innerHTML = wc.prefix + wc.suffix;
}

wc.changePrefix = function() {
  wc.prefix = prefixes[Math.floor(Math.random() * wc.prefixes.length)];
  wc.display();
}
wc.changeSuffix = function() {
  wc.suffix = suffixes[Math.floor(Math.random() * wc.suffixes.length)];
  wc.display();
}
wc.changeAll = function() {
  wc.changePrefix();
  wc.changeSuffix();
  wc.display();
}

wc.init = function() {
  wc.changeAll();
}
