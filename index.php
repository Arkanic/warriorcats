<!DOCTYPE html>
<html>
  <head>
    <title>Warriors name generator</title>
    <script src="names.js"></script>
    <link href="css/global.css" type="text/css" rel="stylesheet"/>
  </head>
  <body onLoad="init()">
    <div class="background">
      <div class="mainbox">
        <div>
          <h1 id="name-text">~</h1>
        </div>
        <p>
          <input type="button" onclick="changePrefix()" value="Change Prefix"/>
          <input type="button" onclick="changeAll()" value="Change Name"/>
          <input type="button" onclick="changeSuffix()" value="Change Suffix"/>
        </p>
        <p>
          <input type="button" onclick="setType(0)" value="Kit"/>
          <input type="button" onclick="setType(1)" value="Apprentice"/>
          <input type="button" onclick="setType(2)" value="Warrior"/>
          <input type="button" onclick="setType(3)" value="Clan Leader"/>
        <p>
          <br></br>
          <input type="text" id="jsoninput" placeholder="Enter save code here..."/>
          <p>
            <input type="button" onclick="importJSON()" value="Import save string"/>
            <input type="button" onclick="exportJSON()" value="Export save string"/>
          </p>
        </p>
     </div>
   </div>
  </body>
</html>
