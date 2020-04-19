class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.2) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}


const el = document.querySelector('.text')
const fx = new TextScramble(el)

var phrases = {
    origin:["This is my story. #iam#"],
    iam:["I am a 28 year old #person#"],
    person:["example human."]
}

var test = {
	"origin": ["#intro# #thing1# #break# #thing2#, #description# #type# #location# #street# \\#NQ \\#northernquartermcr", "#intro# #thing1#, #description# #type# #location# #street# \\#NQ \\#northernquartermcr"],
	"intro":["Check out", "We love", "New bar:", "Just opened:", "We're fans of", "Hot date? Try", "We recommend", "Have you tried", "We like", "Recommended:", "Have you tried", "Definitely check out","Last night we were at", "Just had lunch at", "Just ate at", "Great meal at", "Enjoying a drink at", "Drinking at", "Eating at", "Spent last night in", "Really enjoyed", "New to MCR? Try", "We heartily recommend", "Our new favourite haunt:", "Bar of the day:", "Bar of the week:", "Best place we've found in ages:", "Take your date to", "We're big fans of", "We had a lot of fun at", "We're happy we discovered", "Our favourite place right now is", "Our go-to place right now is", "You'll find us at", "We can't rave enough about", "You have to try", "Book in advance for", "We predict it'll be busy at", "New to the NQ:", "Best place ever:", "We can't say enough nice things about", "Such a fun night at", "Amazing lunch at", "Incredible dinner at", "Legendary service at", "Nothing but praise for", "We adore", "We honestly love", "Get down to", "This Friday, get to", "Don't hang about, hit up"],
	"break":["&", "+"],
	"thing1":["Pie", "Ale", "Sausage", "Sprout", "Pot", "Chip", "Tickle", "Waffle", "Pancake", "Pan", "Fry", "Gaff", "Boat", "Trifle", "Cupcake", "Bowtie", "Fixie", "Bike", "Bicycle", "Handlebar", "Pedal", "Tattoo", "Beard", "Moustache", "Knuckle", "Tram", "Fork", "Knife", "Spoon", "Mug", "Cup", "Kettle", "Fish", "Flour", "Beef", "Pork", "Bacon", "Chicken", "Fries", "Plank", "Pick", "Shovel", "Cake", "Cupcake", "Tipple", "Crab", "Cock", "Pickle", "Spanner", "Cog", "Bean", "Drum", "Spade", "Plaid",  "Leather", "Iron", "Wine", "Cord", "Bear", "Hound", "Cow", "Cattle", "Axe",  "Oak", "Maple", "Stew", "Syrup", "Hammer", "Sickle", "Coat", "Hat", "Shoe", "Sock", "Finger", "Thumb", "Brick", "Cycle", "Duck", "Chain", "Corn", "Cake", "Saw", "Man", "Shirt", "Boot", "Ring", "Zip", "Tackle", "Fettle", "Sheep", "Boar", "Soup", "Flour", "Egg", "Wool", "Cotton", "Clay", "Earth", "Fire", "Burn", "Liquor", "Steam", "Smoke", "Flame", "Burger", "Dawg", "Grass", "Leaf", "Hemp", "Bush", "Flower", "Rose", "Anchor", "Pot", "Pipe", "Smoker", "Lamp", "Mirror", "Avocado", "Spinach", "Quinoa", "Pickle", "Squid", "Chilli", "Chorizo", "Salt", "Pepper", "Falafel", "Halloumi", "Kimchi", "Sauerkraut",  "Cocktail", "Tumbler", "Pint", "Shot", "Grill", "Jack", "Onion", "Bull", "Cheese"],
	"thing2":["Pie", "Ale", "Sausage", "Sprout", "Pot", "Chip", "Tickle", "Waffle", "Pancake", "Pan", "Fry", "Gaff", "Boat", "Trifle", "Cupcake", "Bowtie", "Fixie", "Bike", "Bicycle", "Handlebar", "Pedal", "Tattoo", "Beard", "Moustache", "Knuckle", "Tram", "Fork", "Knife", "Spoon", "Mug", "Cup", "Kettle", "Fish", "Flour", "Beef", "Pork", "Bacon", "Chicken", "Fries", "Plank", "Pick", "Shovel", "Cake", "Cupcake", "Tipple", "Crab", "Cock", "Pickle", "Spanner", "Cog", "Bean", "Drum", "Spade", "Plaid",  "Leather", "Iron", "Wine", "Cord", "Bear", "Hound", "Cow", "Cattle", "Axe",  "Oak", "Maple", "Stew", "Syrup", "Hammer", "Sickle", "Coat", "Hat", "Shoe", "Sock", "Finger", "Thumb", "Brick", "Cycle", "Duck", "Chain", "Corn", "Cake", "Saw", "Man", "Shirt", "Boot", "Ring", "Zip", "Tackle", "Fettle", "Sheep", "Boar", "Soup", "Flour", "Egg", "Wool", "Cotton", "Clay", "Earth", "Fire", "Burn", "Liquor", "Steam", "Smoke", "Flame", "Burger", "Dawg", "Grass", "Leaf", "Hemp", "Bush", "Flower", "Rose", "Anchor", "Pot", "Pipe", "Smoker", "Lamp", "Mirror", "Avocado", "Spinach", "Quinoa", "Pickle", "Squid", "Chilli", "Chorizo", "Salt", "Pepper", "Falafel", "Halloumi", "Kimchi", "Sauerkraut",  "Cocktail", "Tumbler", "Pint", "Shot", "Grill", "Jack", "Onion", "Bull", "Cheese"],
	"description":["an edgy", "a cool", "an electronic", "a chic", "a retro", "a grungy", "a polished", "a futuristic","a hip", "a rad", "an old-school", "a dark", "a light", "a kitsch", "a cute", "a contemporary", "a forward-thinking", "a busy", "a deserted", "a crowded", "a cosmopolitan", "a fascinating", "a rustic", "a traditional", "a quiet", "a cheapo", "an expensive", "a slick", "a weird", "a neato", "a relaxed", "a pleasant", "a trendy", "an exquisite", "an ethical", "a hyper-cool", "a sleazy", "a dirty", "a grimy", "an authentic", "a cutting-edge", "a totally rad", "a 90's styled", "an 80's themed", "an uber cool", "a down-to-earth", "a pretentious", "an unpretentious", "an unassuming", "a colourful", "a hand-built", "a homely", "a ghetto", "an amazing", "a well designed", "an opulent", "a smooth", "a vegan", "a chilled", "a beautiful", "a two storey", "a tiny", "a minuscule", "a massive", "an enormous", "a mind-blowing", "a three floor", "a packed-out", "an ultra cool", "an extra slick", "a handcrafted", "a wood-panelled", "a mirror-lined", "a hyper futuristic", "a super hip", "a revolutionary", "a spellbinding", "a jaw-dropping", "an outstanding", "a wonderful", "a hella cool", "an effortlessly cool", "a wonderful",  "a creative", "a bravely contemporary", "an extra traditional", "an old-fashioned"],
	"type":["breakfast club", "beer hall", "boozer", "theme restaurant", "bowling alley", "hot dog joint", "chilli place", "waffle house", "pancake house", "cocktail lounge", "wine bar", "fusion kitchen", "folk venue", "punk bar", "art space", "gin bar", "whiskey bar", "speakeasy", "rum joint", "sports bar", "dive", "taverna", "tavern", "drinking hole", "experimental restaurant", "food experience", "beverage experience", "drum and bass club", "techno bar", "champagne bar", "fusion restaurant", "chinese restaurant", "kebab house", "arcade bar", "creme de menthe specialist", "dining experience", "beer experience", "cocktail experience", "working class boozer", "tequila bar", "tequila experience", "shot bar", "milkshake joint", "darts club", "sports bar", "burger joint", "rib shack", "BBQ joint", "African restaurant", "chop shop", "pie shop", "pasty shop", "pizza place", "pizzeria", "fish restaurant", "greasy spoon", "Thai place", "hula bar", "burlesque bar", "dining experience", "Cajun place", "chippy", "chip shop", "sushi place", "sushi joint", "teppanyaki restaurant", "takeaway", "bakers", "butchers", "artisan baker", "artisan butcher", "taco stand", "burrito place", "Mexican restaurant", "drive-thru restaurant", "French restaurant" , "cocktail experience", "milkshake experience", "milk bar", "soda bar", "soft drink bar"],
	"location":["in a basement", "under a tarp", "in a van", "in an igloo", "in a makeshift shack", "in a pop-up shop", "in a warehouse", "in a converted boat", "in a tree house", "in an old post office", "in a reclaimed shed", "in a yurt", "in a tent", "in a disused train station", "down some stairs", "in a disused supermarket", "in a converted mill", "in an old cinema", "in a dirty basement", "in a crate", "deep underground", "up a random staircase", "in a parked lorry", "in an old restaurant", "in the back of a pub", "in the middle of the road", "on a fake market stall", "in a reclaimed clothes shop", "in a tattoo studio", "in an old art studio", "in a working design studio", "in an abandoned factory", "behind a fake shop front", "inside a wardrobe", "down a hidden path", "through a window", "in the middle of a hedge maze", "in an alleyway", "down a ginnel", "behind a secret door", "behind a gate", "between two shops", "at the back of a library", "in an old snooker club", "in a poker club", "in an old subway tunnel", "in a roof space", "in a penthouse", "on a balcony", "under a bridge", "at a fake bus stop", "on an open-topped bus", "in a reclaimed school classroom", "in a fake police cell",  "in a darkened room", "through a hidden doorway", "in a secret compartment", "in a secret room", "in a crawlspace", "in an attic", "in a laundrette", "in an old tobacconist", "in a working bakery", "in a working butcher's", "behind a chip shop", "in an old car dealership", "in a reclaimed hat shop", "in a reclaimed newsagent", "in an old video rental store", "in a furniture shop"],
	"street":["on Edge St", "on Castle St", "on Ancoats St", "on Oldham St", "on Tib St", "on Thomas St", "on Stevenson Sq", "on Hilton St", "on Turner St", "near Afflecks", "near Madlab", "near Common", "near Port Street", "on Hilton St",  "near Oi Polloi", "near The Bay Horse",  "near Yadgar's", "on Hare St", "on Oak St", "on Soap St", "on Brick St", "on Union St", "on Warwick St", "on Spear St", "near Mint Lounge", "near Gulliver's", "near Koffee Pot", "near Matt & Phred's", "on Port St", "near Almost Famous", "near Terrace", "next to Common", "next to Afflecks", "near Soup Kitchen", "on Short St"]
}

var grammar = tracery.createGrammar(test);

fx.setText(grammar.flatten("#origin#"));


document.onclick= function(event) {
    fx.setText(grammar.flatten("#origin#"));
};
