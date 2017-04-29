var app = require('./app.component');
var createFs = require('./createFs.service');
var contentDisplay = require('./contentDisplay.service');
var browser = require('./browser.component');
var content = require('./content.component');
var tree = require('./tree.component');
var contextMenu = require('./contextMenu.component');

app();
createFs();
contentDisplay();
browser();
content();
tree();
contextMenu();