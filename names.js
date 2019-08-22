wc = {};
wc.prefixes = ["", ""];
wc.suffixes = ["", ""];
wc.prefix = "";
wc.suffix = "";

wc.changePrefix = function() {
  wc.prefix = prefixes[Math.floor(Math.random() * wc.prefixes.length)];
}


wc.init = function() {
  wc.changePrefix();
  wc.changeSuffix();
}
