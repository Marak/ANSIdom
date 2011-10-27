# ANSIdom 

## a quick and dirty DOM implementation in ANSI escape codes

**share templates between the browser and the terminal** 


## Installation


     npm install ANSIdom
     
     
## Usage

``` js
var ANSIdom = require('../lib/ANSIdom').ANSIdom,
    fs      = require('fs');

var dom = new ANSIdom();

var template = fs.readFileSync('./templates/index.html').toString();

dom.init(function(err){
  
  if (err) {
    throw err;
  }

  //
  // Note: `process` can be any streamable interface, like httpServer.response
  //
  dom.render(template, process);

});
```

## Examples

see: `/bin/` folder for some demos

## MIT