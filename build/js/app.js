(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var userEntry  = new Entry("bs");
    var userString = $('#text-entry').val();
    var words = userEntry.words(userString);
    var vowels = userEntry.vowels(userString);
    var consonants = userEntry.consonants(userString);
    $('#wordCount').text(words);
    $('#vowelCount').text(vowels);
    $('#consonantCount').text(consonants);
    $('#output').show();
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry() {
}

Entry.prototype.words = function(entry) {
  var wordCount = entry.split(' ');
  debugger;
  var count = wordCount.length;
  return count;
};

Entry.prototype.vowels = function(entry) {
  var vowels = entry.match(/[aeiou]/gi);
  var vowelCount = vowels.length;
  return vowelCount;
};

Entry.prototype.consonants = function(entry) {
  var letters = entry.match(/[a-z]/gi);
  var vowels = entry.match(/[aeiou]/gi);
  return letters.length - vowels.length;
};

exports.entryModule = Entry;

},{}]},{},[1]);
