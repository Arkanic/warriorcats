let rawPrefixes = "Acorn Amber Ant Apple Arch Ash Aspen Badger Bark Beech Beetle Berry Birch Bird Black Blizzard Blossom Blue Boulder Bounce Bracken Branch Bramble Brave Breeze Briar Bright Brindle Broken Brown Brush Bumble Buzzard Cedar Cherry Cinder Claw Cloud Clover Coal Cold Copper Creek Cricket Crooked Crow Daisy Dapple Dark Dawn Dead Deer Dew Dove Drift Duck Dusk Dust Eagle Ebony Echo Eel Egg Fading Falcon Fallen Fallow Fawn Feather Fennel Fern Ferret Finch Fire Fish Flame Fleet Flint Flower Fox Frog Frost Furze Fuzzy Gold Goose Gorse Gray Grass Green Hail Half Hare Hawk Hay Hazel Heather Heavy Heron Hollow Holly Honey Horse Ice Ivy Jagged Jay Jump Juniper Kestrel Kink Lake Larch Lark Leaf Leopard Lichen Light Lightning Lily Lion Little Lizard Long Lost Loud Lynx Maggot Mallow Marsh Maple Meadow Milk Minnow Mint Mink Misty Mole Moon Morning Moss Moth Mouse Mud Mumble Nettle Newt Night Nut Oak Oat Odd Olive One Otter Owl Pale Patch Pear Perch Petal Pigeon  Pike Pine Plum Pool Poppy Pounce Prickle Puddle Quail Quick Quiet Rabbit Raccoon Ragged Rain Rapid Rat Raven Red Reed Ripple River Robin Rock Rose Rowan Rubble Running Rush Russet Rust Rye Sage Scorch Sedge Seed Shade Shadow Sharp Sheep Shell Shining Short Shrew Shred Silent Silver Sky Slate Slow Small Smoke Snail Snake Sneeze Snow Soft Soot Sorrel Spark Sparrow Speckle Spider Splash Spot Spruce Squirrel Starling Stone Storm Stumpy Sun Swallow Sweet Swift Tall Talon Tangle Tansy Tawny Thistle Thorn Thrush Thunder Tiger Timber Tiny Toad Torn Trout Tumble Twig Twilight Vine Vole Wasp Weasel Web Weed Wet Whisker White Wild Willow Wind Wolf Yellow";
let rawSuffixes = "acorn bee belly berry bird blaze branch breeze briar bright brook call claw cloud creek cry dapple dawn dust ear eye face fall fang feather fern fin fire fish flame flight flower foot frost fur gaze goose grass hare hawk heart heather hollow ice ivy jaw  jay leaf leap leg light mask mist moon nettle nose nut pad path pelt petal pool poppy puddle rapid run scar shade shine sky snow song spark speck spirit splash spots spring stem step storm streak stream strike stripe sun swipe tail talon thicket thorn throat tooth tree tuft water watcher whisker willow wind wing wish whisper";
let prefixes = rawPrefixes.split(" ");
let suffixes = rawSuffixes.split(" ");
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

/* JSON format:
{ "prefix":{name prefix}, "suffix":{name suffix}}
*/

function importJSON() {
  var importCode = JSON.parse(document.getElementById("jsoninput").value);
  prefix = importCode.prefix;
  suffix = importCode.suffix;
}

function exportJSON() {
  document.getElementById("jsoninput").value = JSON.stringify({"prefix": prefix, "suffix":suffix});
}
