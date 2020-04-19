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
    storyfx.setText(storygrammar.flatten("#origin#"));
    headerfx.setText(headergrammar.flatten("#origin#"));
}
