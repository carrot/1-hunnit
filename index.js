var Botkit = require('botkit')
var beep = require('beepboop-botkit')

var token = process.env.SLACK_TOKEN

var controller = Botkit.slackbot({
  // reconnect to Slack RTM when connection goes bad
  retry: Infinity,
  debug: false
})

// Assume single team mode if we have a SLACK_TOKEN
if (token) {
  console.log('Starting in single-team mode')
  controller.spawn({
    token: token
  }).startRTM(function (err, bot, payload) {
    if (err) {
      throw new Error(err)
    }

    console.log('Connected to Slack RTM')
  })
// Otherwise assume multi-team mode - setup beep boop resourcer connection
} else {
  console.log('Starting in Beep Boop multi-team mode')
  beep.start(controller, { debug: true })
}

// reply to @bot hello
controller.on('direct_mention', react)

// reply to hello @bot
controller.on('mention', react)

// do something if a reaction is added
controller.on('reaction_added', function (bot, message) {
  bot.api.reactions.add({
    name: message.reaction,
    channel: message.item.channel,
    timestamp: message.item.ts
  }, function (err, resp) {
    if (err) {
      console.log(err)
    }
  })
})

// give the bot something to listen for.
controller.hears([
  new RegExp('\\blol\\b', 'i'),
  new RegExp('\\bfigure it out\\b', 'i'),
  new RegExp('\\b1hunnit\\b', 'i'),
  new RegExp('\\b311\\b', 'i'),
  new RegExp('\\b420\\b', 'i'),
  new RegExp('\\b100\\b', 'i'),
  new RegExp('\\bone hundred\\b', 'i'),
  new RegExp('\\bkeep it \\w+\\b', 'i'),
  new RegExp('\\bwho is brian bowman?\\b', 'i'),
  new RegExp('\\bwho is rehmat qadir?\\b', 'i'),
  new RegExp('\\bwho is little elvin?\\b', 'i'),
  new RegExp('\\bwho is diggity dom?\\b', 'i'),
  new RegExp('\\bWHO IS MATT SLITER?\\b', 'i'),
  new RegExp('\\bwho is frank?\\b', 'i'),
  new RegExp('\\bf train', 'i'),
  new RegExp('\\bget high\\b', 'i'),
  new RegExp('\\bcarrot', 'i'),
  new RegExp('\\bbook', 'i'),
  new RegExp('\\billiterate', 'i'),
  new RegExp('\\bshame\\b', 'i'),
  new RegExp('\\brunning', 'i'),
  new RegExp('\\bsuck it', 'i'),
  new RegExp('\\bfrfr\\b', 'i'),
  new RegExp('\\bfarmigo\\b', 'i'),
  new RegExp('\\breal friends\\b', 'i'),
  new RegExp('\\bshots fired\\b', 'i'),
  new RegExp('\\byou are fired\\b', 'i'),
  new RegExp('\\bfood', 'i'),
  new RegExp('\\bWHO IS THE BEST WRESTLER EVER?\\b', 'i'),
  new RegExp('\\bWHAT IS TURNIP SOLUTIONS?\\b', 'i'),
  'weed', 'turnip'],
  ['direct_message', 'direct_mention', 'mention', 'ambient'],
  react
)

function react (bot, message) {
  function pushBooks () {
    rxn.push(
      'notebook',
      'green_book',
      'closed_book',
      'blue_book',
      'orange_book',
      'books',
      'book',
      'notebook_with_decorative_cover'
    )
  }

  function pushFood () {
    rxn.push(
      'apple',
      'green_apple',
      'turnip',
      'pear',
      'egg',
      'poultry_leg',
      'grapes',
      'bread',
      'tea',
      'melon',
      'tangerine',
      'lemon',
      'banana',
      'grapes',
      'strawberry',
      'melon',
      'cherries',
      'peach',
      'pineapple',
      'tomato',
      'eggplant',
      'hot_pepper',
      'corn',
      'sweet_potato',
      'bread',
      'honey_pot',
      'cheese_wedge',
      'meat_on_bone',
      'fork_and_knife'
    )
  }

  var rxn = ['100']
  if (message.text.toUpperCase() === 'WHO IS BRIAN BOWMAN?') {
    bot.reply(message, 'Did you even have to ask that? He is someone who always keeps it :100:')
  }
  if (message.text.toUpperCase() === 'WHO IS MATT SLITER?') {
    rxn.push('basketball', 'eyes', 'muscle', 'fire', 'gun')
    bot.reply(message, 'The crossover king. He\'s only here so he don\'t get fined.')
  }
  if (message.text.toUpperCase() === 'WHO IS REHMAT QADIR?') {
    bot.reply(message, 'Not to front, he is someone who always keeps it :100: and he lives in a VR/AR world unlike you plebians :100:')
  }
  if (message.text.toUpperCase() === 'WHO IS LITTLE ELVIN?') {
    bot.reply(message, 'Not to front, stopping interrupting him because he is someone who always keeps it :100: and he is really good developer. :100:')
  }
  if (message.text.toUpperCase() === 'WHO IS DIGGITY DOM?') {
    bot.reply(message, 'Not to front, he is master of QA aka Smooth criminal of code breaks. Get it right. :100:')
  }
  if (message.text.toUpperCase() === 'WHO IS FRANK?') {
    bot.reply(message, 'Not to front, Frank White was the King Of New York. Franco Jaramillo is the best producer since Dr Dre. :100:')
  }
  if (message.text.toUpperCase().indexOf('FIGURE IT OUT') > -1) {
    if (message.user === 'U024GG01L' || message.user === 'U09NPAG11') {
      bot.reply(message, 'http://imgur.com/38bP71C.gif')
    }
  }
  if (message.text.toUpperCase().indexOf('F TRAIN') > -1) {
    rxn.push('f_train_sucks')
  }
  if (message.text.toUpperCase().indexOf('LOL') > -1) {
    rxn.push('laughing')
  }
  if (message.text.toUpperCase().indexOf('GET HIGH') > -1) {
    rxn.push('weed')
  }
  if (message.text.toUpperCase().indexOf('CARROT') > -1) {
    rxn.push('carrot')
  }
  if (message.text.toUpperCase().indexOf('SHAME') > -1) {
    rxn.push('shame')
  }
  if (message.text.toUpperCase().indexOf('BOOK') > -1) {
    pushBooks()
  }
  if (message.text.toUpperCase().indexOf('ILLITERATE') > -1) {
    pushBooks()
  }
  if (message.text.toUpperCase().indexOf('RUNNING') > -1) {
    rxn.push('running')
  }
  if (message.text.toUpperCase().indexOf('SHOTS FIRED') > -1) {
    rxn.push('gun')
  }
  if (message.text.toUpperCase().indexOf('REAL FRIENDS') > -1) {
    rxn.push('yeezy', 'question')
    bot.reply(message, 'HOW MANY OF US ARE REAL FRIENDS? :yeezy:')
  }
  if (message.text.toUpperCase().indexOf('YOU ARE FIRED') > -1) {
    rxn.push('the_donald')
    bot.reply(message, 'You\'re fired! :the_donald:')
  }
  if (message.text.toUpperCase().indexOf('FOOD') > -1) {
    pushFood()
  }
  if (message.text.toUpperCase().indexOf('SUCK IT') > -1) {
    rxn.push('eggplant', 'open_mouth')
  }
  if (message.text.indexOf('420') > -1) {
    rxn.push('weed')
  }
  if (message.text.indexOf(':turnip:') > -1) {
    rxn.push('turnip', 'carrot')
    bot.reply(message, '#TurnipSolutions')
  }
  if (message.text.indexOf('311') > -1) {
    rxn.push('311')
  }
  if (message.text.indexOf('?') > -1) {
    rxn.push('question')
  }
  if (message.text.indexOf(':weed:') > -1) {
    rxn.push('weed', 'lifted')
  }
  if (message.text.toUpperCase().indexOf('WHO IS THE BEST WRESTLER EVER?') > -1) {
    bot.reply(message, 'Not to front, it was Rehmat Qadir until he got hurt putting Hulk Hogan in a full nelson. That leaves THE UNDERTAKERS AS THE G.O.A.T. of WWE #Facts')
  }
  if (message.text.toUpperCase().indexOf('WHAT IS TURNIP SOLUTIONS?') > -1) {
    rxn.push('turnip')
    bot.reply(message, 'Turnip Solutions was established on 4/1/2016 with Brian Bowman as the CEO, Rebecca Ahn as the CTO, Jeff Escalante as the Triple OG, Brandon Romano as the Director of Technology and a turnip named Plebian. Turnip Solutions is the dark side of Carrot Creative, where people drink Kool-aid, work hard and play harder. Please eat more turnips to learn more information, but dont eat Plebian. Thanks.')
  }
  if (message.text.toUpperCase().indexOf('FARMIGO') > -1) {
    pushFood()
  }
  reaction(bot, rxn, message)
}

function reaction (aBot, rxn, message) {
  for (var i = 0; i < rxn.length; i++) {
    console.log(message)
    aBot.api.reactions.add({
      name: rxn[i],
      channel: message.channel,
      timestamp: message.ts
    }, function (err, resp) {
      if (err) {
        console.log(err)
      }
    })
  }
}
