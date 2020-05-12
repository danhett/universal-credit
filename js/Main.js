particlesJS.load('particlesholder', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const headertext = document.querySelector('.headertext')
const headerfx = new TextScramble(headertext)
const headergrammar = tracery.createGrammar(nameGrammar);

const introtext = document.querySelector('.storyintro')
const introfx = new TextScramble(introtext)
const storytext = document.querySelector('.storytext')
const storyfx = new TextScramble(storytext)

const subtext = document.querySelector('.subtext')
const subfx = new TextScramble(subtext)

const genericgrammar = tracery.createGrammar(generic);
const timegrammar = tracery.createGrammar(times);
const pregrammar = tracery.createGrammar(pre);
const postgrammar = tracery.createGrammar(post);

doUpdate();

// listeners for updates
document.onclick= function(event) {
    doUpdate();
};

function doUpdate() {
    headerfx.setText(headergrammar.flatten("#origin#"));

    // rough stats: 2.8 mill existing users + 1.4 mill pandemic additions = 4.2 mill total

    if((Math.random() * 4.2) < 2.8) {
        introfx.setText(genericgrammar.flatten("#origin#"));
        storyfx.setText(pregrammar.flatten("#origin#"));
        subfx.setText(timegrammar.flatten("#long#"));
    }
    else  {
        introfx.setText(genericgrammar.flatten("#origin#"));
        storyfx.setText(postgrammar.flatten("#origin#"));
        subfx.setText(timegrammar.flatten("#short#"));
    }
}
