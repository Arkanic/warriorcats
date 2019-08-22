<!DOCTYPE html>
<html>
  <head>
    <title>Warriors name generator</title>
    <script src="names.js"></script>
    <link href="css/global.css" type="text/css" rel="stylesheet"/>
  </head>
  <body onLoad="wc.init()">
    <p id="name-text">~</p>
    <p>
      <button onclick="wc.changePrefix()">Change Prefix</button>
      <button onclick="wc.changeAll()">Change Name</button>
      <button onclick="wc.changeSuffix()">Change Suffix</button>
    </p>
  </body>
</html>
