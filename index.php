<!DOCTYPE html>
<html>
  <head>
    <title>Warriors name generator</title>
    <script src="names.js"></script>
    <link href="css/global.css" type="text/css" rel="stylesheet"/>
  </head>
  <body onLoad="init()">
    <div>
      <h1 id="name-text">~</h1>
    </div>
    <p>
      <input type="button" onclick="changePrefix()" value="Change Prefix"/>
      <input type="button" onclick="changeAll()" value="Change Name"/>
      <input type="button" onclick="changeSuffix()" value="Change Suffix"/>
    </p>
    <p>
      <input type="radio" name="rank" id="kit">Kit</input>
      <input type="radio" name="rank" id="apprentice">Apprentice</input>
      <input type="radio" name="rank" id="warrior">Warrior</input>
      <input type="radio" name="rank" id="leader">Clan Leader</input>
    <p>
      <input type="text" id="jsoninput" placeholder="Enter save code here..."/>
      <p>
        <input type="button" onclick="importJSON()" value="Import"/>
        <input type="button" onclick="exportJSON()" value="Export"/>
      </p>
    </p>
  </body>
</html>
