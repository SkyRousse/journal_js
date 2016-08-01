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
