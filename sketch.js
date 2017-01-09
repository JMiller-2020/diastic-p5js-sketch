function diastic(seed, words) {

    var phrase = "";
    var currentWord = 0;

    for (var i = 0; i < seed.length; i++) {
        var c = seed.charAt(i);
        if(currentWord >= words.length) {
          currentWord = 0;
        }
        for (var j = currentWord; j < words.length; j++) {
            if (words[j].charAt(i % words[j].length) == c) {
                phrase += words[j];
                phrase += " ";
                currentWord = j + 1;
                // console.log(words[j]);
                break;
            }
        }
    }
    return phrase;
}



var srctxt;
var words;

function preload() {
    srctxt = loadStrings('smashmouth.txt');
}

function setup() {
    noCanvas();
    srctxt = join(srctxt, " ").toLowerCase();
    words = splitTokens(srctxt, ' ,!.?\"()');

    var seed = select("#seed");
    var submit = select("#submit");
    submit.mousePressed(function() {
        var phrase = diastic(seed.value().toLowerCase(), words);
        createP(phrase);
        // createP(seed.value());
        // createP(srctxt);
    });
}
