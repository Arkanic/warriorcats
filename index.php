<!DOCTYPE html>
<html>
  <head>
    <title>Warriors name generator</title>
    <script src="names.js"></script>
    <link href="css/global.css" type="text/css" rel="stylesheet"/>
  </head>
  <body onLoad="init()">
    <h1 id="name-text">~</h1>
    <p>
      <input type="button" onclick="changePrefix()" value="Change Prefix"/>
      <input type="button" onclick="changeAll()" value="Change Name"/>
      <input type="button" onclick="changeSuffix()" value="Change Suffix"/>
    </p>
  </body>
</html>
