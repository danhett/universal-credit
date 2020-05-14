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

doInitialSetup();

function doInitialSetup() {
    headerfx.setText("/////////// it feels like they don't want us to survive");
    subfx.setText("//////// a work of generative fiction by dan hett<br>///// created as part of the gmca covid-19 microcommission project");

    introfx.setText("This site generates fictional stories reflecting the experiences of people trapped within the Universal Credit system. <br><br>Approximately 1.5 million people signed up for Universal Credit during the global Coronavirus pandemic, adding to the 2.8 million existing users that have passed through the system since it's inception with the Welfare Reform Act in 2012.<br><br>Although fictional, these stories aim to echo the reality of the millions of people currently being let down by the UC system and the DWP. I'd like to thank the many many people who reached out to share their stories and experiences with me, without whom this project could not exist.<br><br><b>Click anywhere</b>.");
}

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
