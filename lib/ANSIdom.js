var request = require('request');

var  path     = require('path'),
     jsdom    = require('jsdom'),
     fs       = require('fs');

var ANSIdom = exports.ANSIdom = function(){

  //
  // Require DOM element to ANSI mappings
  //
  this.elements = require('./ANSIdom/elements');

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

 try {
    var div = window.document.createElement('div');
    div.innerHTML = html;
    $('body *', div).each(function(i,v){
      self.elements[v.tagName]($, v, charm);
    });
    charm.column(0).down(1).write('');
    //charm.destroy();
 } catch(err){
   console.log(err);
 }

};

