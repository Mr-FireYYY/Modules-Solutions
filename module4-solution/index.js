(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var helloSpeaker = {};
    helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
    };
    window.helloSpeaker = helloSpeaker;
    var byeSpeaker = {};
    var speakWord = "Goodbye";
    byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
    for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    } else {
    helloSpeaker.speak(names[i]);
   }
   }
   
})();