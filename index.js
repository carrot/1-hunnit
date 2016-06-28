var Botkit = require('botkit')
var beep = require('beepboop-botkit')
var request = require('request')
var htmlparser = require('htmlparser2')

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
  new RegExp('\\b1 train', 'i'),
  new RegExp('\\b2 train', 'i'),
  new RegExp('\\b3 train', 'i'),
  new RegExp('\\b4 train', 'i'),
  new RegExp('\\b5 train', 'i'),
  new RegExp('\\b6 train', 'i'),
  new RegExp('\\b7 train', 'i'),
  new RegExp('\\ba train', 'i'),
  new RegExp('\\bb train', 'i'),
  new RegExp('\\bc train', 'i'),
  new RegExp('\\bd train', 'i'),
  new RegExp('\\be train', 'i'),
  new RegExp('\\bf train', 'i'),
  new RegExp('\\bg train', 'i'),
  new RegExp('\\bj train', 'i'),
  new RegExp('\\bl train', 'i'),
  new RegExp('\\bm train', 'i'),
  new RegExp('\\bn train', 'i'),
  new RegExp('\\bq train', 'i'),
  new RegExp('\\br train', 'i'),
  new RegExp('\\bs train', 'i'),
  new RegExp('\\bz train', 'i'),
  new RegExp('\\bsir train', 'i'),
  new RegExp('\\bget high\\b', 'i'),
  new RegExp('\\bcarrot', 'i'),
  new RegExp('\\bbook', 'i'),
  new RegExp('\\billiterate', 'i'),
  new RegExp('\\bshame\\b', 'i'),
  new RegExp('\\bnah\\b', 'i'),
  new RegExp('\\brunning', 'i'),
  new RegExp('\\bsuck it', 'i'),
  new RegExp('\\bfrfr\\b', 'i'),
  new RegExp('\\bfarmigo\\b', 'i'),
  new RegExp('\\breal friends\\b', 'i'),
  new RegExp('\\bshots fired\\b', 'i'),
  new RegExp('\\byou are fired\\b', 'i'),
  new RegExp('\\bfood', 'i'),
  new RegExp('\\boh shit\\b', 'i'),
  new RegExp('\\bWHO IS THE BEST WRESTLER EVER?\\b', 'i'),
  new RegExp('\\bWHAT IS TURNIP SOLUTIONS?\\b', 'i'),
  'weed', 'turnip'],
  ['direct_message', 'direct_mention', 'mention', 'ambient'],
  react
)

function react (bot, message) {
  if (message.user === 'U024H2X4H' || message.user === 'U04MP4SSA') {
    return
  }
  var rxn = ['100']
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
  if (message.text.toUpperCase().indexOf('1 TRAIN') > -1) {
    rxn.push('1_train', 'mta')
    getTrainStatus('123', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('2 TRAIN') > -1) {
    rxn.push('2_train', 'mta')
    getTrainStatus('123', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('3 TRAIN') > -1) {
    rxn.push('3_train', 'mta')
    getTrainStatus('123', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('4 TRAIN') > -1) {
    rxn.push('4_train', 'mta')
    getTrainStatus('456', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('5 TRAIN') > -1) {
    rxn.push('5_train', 'mta')
    getTrainStatus('456', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('6 TRAIN') > -1) {
    rxn.push('6_train', 'mta')
    getTrainStatus('456', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('7 TRAIN') > -1) {
    rxn.push('7_train', 'mta')
    getTrainStatus('7', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('A TRAIN') > -1) {
    rxn.push('a_train', 'mta')
    getTrainStatus('ACE', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('B TRAIN') > -1) {
    rxn.push('b_train')
    getTrainStatus('BDFM', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('C TRAIN') > -1) {
    rxn.push('c_train', 'mta')
    getTrainStatus('ACE', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('D TRAIN') > -1) {
    rxn.push('d_train', 'mta')
    getTrainStatus('BDFM', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('E TRAIN') > -1) {
    rxn.push('e_train', 'mta')
    getTrainStatus('ACE', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('F TRAIN') > -1) {
    rxn.push('f_train_sucks', 'mta')
    getTrainStatus('BDFM', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('G TRAIN') > -1) {
    rxn.push('g_train', 'mta')
    getTrainStatus('G', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('J TRAIN') > -1) {
    rxn.push('j_train', 'mta')
    getTrainStatus('JZ', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('L TRAIN') > -1) {
    rxn.push('l_train', 'mta')
    getTrainStatus('L', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('M TRAIN') > -1) {
    rxn.push('m_train', 'mta')
    getTrainStatus('BDFM', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('N TRAIN') > -1) {
    rxn.push('n_train', 'mta')
    getTrainStatus('NQR', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('Q TRAIN') > -1) {
    rxn.push('q_train', 'mta')
    getTrainStatus('NQR', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('R TRAIN') > -1) {
    rxn.push('r_train', 'mta')
    getTrainStatus('NQR', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('S TRAIN') > -1) {
    rxn.push('s_train', 'mta')
    getTrainStatus('S', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('Z TRAIN') > -1) {
    rxn.push('z_train', 'mta')
    getTrainStatus('JZ', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }
  if (message.text.toUpperCase().indexOf('SIR TRAIN') > -1) {
    rxn.push('sir_train', 'mta')
    getTrainStatus('SIR', function (text, train) {
      bot.reply(message, 'THE MTA SAYS ::: ' + text + ' FOR THE ' + train)
    })
  }

  if (message.user === 'U09NPAG11' || message.user === 'U08GT2AKC' || message.user === 'U0E5ATAET' || message.user === 'U0B21BV0E' || message.user === 'U09NPMD9D' || message.user === 'U024GG01L' || message.user === 'U054D7BLQ' || message.user === 'U03PUU0ET' || message.user === 'U024GGPQL' || message.user === 'U072XF54H' || message.user === 'U024GG4T9' || message.user === 'U024GG2BS') {
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
    if (message.text.toUpperCase().indexOf('NAH') > -1) {
      if (message.user === 'U08GT2AKC' || message.user === 'U09NPAG11') {
        bot.reply(message, 'http://67.media.tumblr.com/4025b025994a6d2be7814be7ff1b6058/tumblr_n0ntau9Unr1qhcz8uo1_400.gif')
      }
    }
    if (message.text.toUpperCase().indexOf('OH SHIT') > -1) {
      if (message.user === 'U024GG01L' || message.user === 'U09NPAG11' || message.user === 'U09NPMD9D') {
        bot.reply(message, 'http://i.imgur.com/aMgG2jh.gif')
      }
    }
    if (message.text.toUpperCase().indexOf('FIGURE IT OUT') > -1) {
      if (message.user === 'U024GG01L' || message.user === 'U09NPAG11') {
        bot.reply(message, 'http://imgur.com/38bP71C.gif')
      }
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
}

function getTrainStatus (train, callback) {
  request('http://web.mta.info/status/serviceStatus.txt', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var nameField = false
      var theTrain = false
      var theTrainStatus = false
      var parser = new htmlparser.Parser({
        onopentag: function (name, attribs) {
          if (name === 'name') {
            nameField = true
          }
          if (name === 'status' && theTrain === true) {
            theTrainStatus = true
            theTrain = false
          }
        },
        ontext: function (text) {
          if (nameField && text === train) {
            theTrain = true
          }
          if (theTrainStatus === true) {
            callback(text, train)
            theTrainStatus = false
          }
        },
        onclosetag: function (tagname) {
          if (tagname === 'name') {
            nameField = false
          }
        }
      }, {decodeEntities: true})
      parser.write(body)
      parser.end()
    }
  })
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
