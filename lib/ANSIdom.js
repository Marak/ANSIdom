var  path     = require('path'),
     jsdom    = require('jsdom'),
     fs       = require('fs');

var ANSIdom = exports.ANSIdom = function(){

  //
  // Require DOM element to ANSI mappings
  //
  this.elements = require('./ANSIdom/elements');
  this.helpers  = require('./ANSIdom/helpers');

  return this;
};


ANSIdom.prototype.init = function (callback) {

  var self = this;
  jsdom.env( "<!DOCTYPE html>\n<html><body></body></html>", ['./jquery.js'], function (err, window) {
     if (err) {
       return callback(err);
     }
     self.window = window;
     callback(null);
  });

};

ANSIdom.prototype.render = function (html, stream) {

 var charm  = require('charm')(stream),
     window = this.window,
     $      = this.window.$,
     self   = this;

  //
  // Remark: Not really the right place for this, but it works
  //
  charm.on('^C', process.exit);

    var div = window.document.createElement('div');
    html = html.replace(/^\W+/g, "");
    html = html.replace(/\n/g, "");
    div.innerHTML = html;
    charm.reset();

    charm.down(2);
    var rowCount = self.elements.render($, $('body div', div), charm);

    self.helpers.box(0, 0, 15, 60, charm);
    charm.column(1).down(3).write('');
    charm.cursor(0,60);
    //charm.destroy();


};

