var helpers = {};

helpers = exports;

helpers.box = function (x, y, height, width, stream) {
  
  stream.push(true);
  
  stream.position(x, y);
  
  // top
  stream.write(chars['top-left'] + Array(width - 1).join('━') + chars['top-right'] + '\n');

  
  for (var i = 0; i < height -2; i++) {
    stream.write(chars['left'])
    stream.move(width - 2);
    stream.write(chars['right'] + '\n');
  }

  // bottom
  stream.write(chars['bottom-left'] + Array(width - 1).join('━') + chars['bottom-right'] + '\n');

  stream.pop(true);
  
};


var chars = {
    'top': '━'
  , 'top-mid': '┳'
  , 'top-left': '┏'
  , 'top-right': '┓'
  , 'bottom': '━'
  , 'bottom-mid': '┻'
  , 'bottom-left': '┗' 
  , 'bottom-right': '┛'
  , 'left': '┃'
  , 'left-mid': '┣'
  , 'mid': '━'
  , 'mid-mid': '╋'
  , 'right': '┃'
  , 'right-mid': '┫'
}
