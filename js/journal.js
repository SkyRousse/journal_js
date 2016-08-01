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

Entry.prototype.getTeaser = function(entry) {
  var sentences = entry.match( /[^\.!\?]+[\.!\?]+/ig );
  var firstSentence = sentences.shift();
  var teaser = firstSentence.split(' ');
  var output = [];
  if (teaser.length > 8) {
    for (var i = 0; i < 8; i++) {
      output.push(teaser[i]);
    }
    var result = output.join(' ')
    return result
  } else {
    return firstSentence;
  }
};

exports.entryModule = Entry;
