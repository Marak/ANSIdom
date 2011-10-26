var elements = {};

var colors = require

elements = exports;

elements.H1 = function (d, el,stream) {
 stream.column(0).down(1).write(d(el).text());
};

elements.H2 = function ( d, el,stream) {
  elements.H1(d, el,stream);
};
elements.H3 = function (d, el,stream) {
  elements.H1(d, el,stream);
};
elements.H4 = function (d, el,stream) {
  elements.H1(d, el,stream);
};
elements.H5 = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.DIV = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.P = function (d, el,stream) {
  stream.column(2).down(2).write(d(el).text());
};

elements.A = function (d, el,stream) {
  stream.column(2).down(2).write(d(el).text() + ": " + d(el).attr('href'));
};

elements.SPAN = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.IMG = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.IFRAME = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.SCRIPT = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.TIME = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.ACRONYM = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.I = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.B = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.STRONG = function (d, el,stream) {
  elements.H1(d, el,stream);
};


elements.TABLE = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.TR = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.TD = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.TH = function (d, el,stream) {
  //elements.H1(d, el,stream);
};


elements.BR = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.HR = function (d, el,stream) {
  elements.H1(d, el,stream);
};


elements.FORM = function (d, el,stream) {
  //elements.H1(d, el,stream);
};
elements.INPUT = function (d, el,stream) {
  //stream.column(0).down(1).write(d(el).val());
};

elements.BUTTON = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.LABEL = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.SELECT = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.OPTION = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.OL = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.UL = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.DL = function (d, el,stream) {
  //elements.H1(d, el,stream);
};

elements.DD = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.DT = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.LI = function (d, el,stream) {
  
  //console.log(d(el).childNodesList.length);
  //stream.column(2).down(2).write('*' + d(el).text());
  
};

elements.CODE = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.CENTER = function (d, el,stream) {
  elements.H1(d, el,stream);
};

elements.FOOTER = function (d, el,stream) {
  elements.H1(d, el,stream);
};
