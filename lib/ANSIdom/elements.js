var elements = {};

var colors = require('colors');
var wrap = require('wordwrap')(3,60);

elements = exports;

elements.render = function($, el, stream) {
  var self = this;

  var rows = 0;
  $(el).children().each(function(i,v){
    stream.column(3);
    elements[v.tagName]($, v, stream);
    //
    // Remark: elements that start newlines by default
    //
    if(['H1', 'H2', 'UL', 'LI', 'P', 'DIV', 'CODE', 'BR', 'HR'].indexOf(v.tagName) !== -1){
      stream.down(2);
      rows += 2;
    }
    rows += 1;
  });

  return rows;
}

elements.H1 = function ($, el, stream) {
 stream.write($(el).text().bold.underline);
};

elements.H2 = function ( $, el, stream) {
  stream.write($(el).text().bold);
};
elements.H3 = function ($, el, stream) {
  elements.H1($, el, stream);
};
elements.H4 = function ($, el, stream) {
  elements.H1($, el, stream);
};
elements.H5 = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.DIV = function ($, el, stream) {
  stream.write($.trim($(el).text()));
};
  
elements.P = function ($, el, stream) {
  stream.write(wrap($.trim($(el).text())));
};

elements.A = function ($, el, stream) {
  stream.write(' [' + $(el).html() + "](" + $(el).attr('href') + ')');
};

elements.SPAN = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.IMG = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.IFRAME = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.SCRIPT = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.TIME = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.ACRONYM = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.I = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.EM = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.B = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.STRONG = function ($, el, stream) {
  elements.H1($, el, stream);
};


elements.TABLE = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.TR = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.TD = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.TH = function ($, el, stream) {
  //elements.H1($, el, stream);
};


elements.BR = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.HR = function ($, el, stream) {
  elements.H1($, el, stream);
};


elements.FORM = function ($, el, stream) {
  //elements.H1($, el, stream);
};
elements.INPUT = function ($, el, stream) {
  //stream.column(0).down(1).write($(el).val());
};

elements.BUTTON = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.LABEL = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.SELECT = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.OPTION = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.OL = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.UL = function ($, el, stream) {
  elements.render($, $(el), stream);
  //elements.H1($, el, stream);
};


elements.LI = function ($, el, stream) {
  //console.log($(el).childNodesList.length);
  stream.column(2).write('   * ' + $(el).text());
  elements.render($, el, stream);
  
};

elements.DL = function ($, el, stream) {
  //elements.H1($, el, stream);
};

elements.DD = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.DT = function ($, el, stream) {
  elements.H1($, el, stream);
};


elements.CODE = function ($, el, stream) {
  stream.write($(el).text());

};

elements.CENTER = function ($, el, stream) {
  elements.H1($, el, stream);
};

elements.FOOTER = function ($, el, stream) {
 stream.write($.trim($(el).text()));
 elements.render($, $(el), stream);
};
