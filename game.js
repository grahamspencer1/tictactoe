var xs = 0;
var os = 0;
var xScore = 0;
var oScore = 0;


var x = {
  menu_option: 'x',
  name: 'x'
}

var o = {
  menu_option: 'o',
  name: 'o'
}

function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('X Score: ' + xScore + '       O Score: ' + oScore);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');
  console.log('(x) Place X');
  console.log('(o) Place O');
  console.log("\n------------------");
  console.log("\n_|_|_");
  console.log("_|_|_");
  console.log(" | | ");
  console.log("\n------------------");
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nPick X or O -> ');
}

// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'x':
      console.log('\nX')
      break;
    case 'o':
      console.log('\nO')
      break;
    default:
      console.log('\nInvalid Command!');
  }
}

//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 500); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!');
});
