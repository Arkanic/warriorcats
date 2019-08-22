prefixes = ["", ""];
suffixes = ["", ""];
prefix = "";
suffix = "";

display = function() {
  document.getElementById("name-text").innerHTML = prefix + suffix;
}

changePrefix = function() {
  prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  display();
}
changeSuffix = function() {
  suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  display();
}
changeAll = function() {
  changePrefix();
  changeSuffix();
  display();
}

init = function() {
  changeAll();
}
