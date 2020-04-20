particlesJS.load('particlesholder', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const headertext = document.querySelector('.headertext')
const headerfx = new TextScramble(headertext)
const headergrammar = tracery.createGrammar(nameGrammar);

const storytext = document.querySelector('.storytext')
const storyfx = new TextScramble(storytext)
const storygrammar = tracery.createGrammar(story);

// create the grammar and first text update

doUpdate();

// listeners for updates
document.onclick= function(event) {
    doUpdate();
};

function doUpdate() {
    headerfx.setText(headergrammar.flatten("#origin#"));

    // 2.8 mill + 1.4 mill = 4.2 mill total

    var test = Math.random();
    console.log(test * 4.2);
    if(test * 4.2 < 2.8)
        storyfx.setText(storygrammar.flatten("#origin#"));
    else
        storyfx.setText(storygrammar.flatten("#origin#"));
}
