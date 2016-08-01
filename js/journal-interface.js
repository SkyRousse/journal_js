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
