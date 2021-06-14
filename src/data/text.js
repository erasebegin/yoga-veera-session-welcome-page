const pageText = {
  en: {
    h1: 'Live Webinar',
    h2: function (title) {
      return `Isha Online Offerings: ${title}`;
    },
    h3: 'To ensure the best possible experience, please follow the guidelines below:',
    h4: 'For Additional Support:',
    p1: 'Isha Online Offerings',
    p2: function (title) {
      return `The ${title} session includes some yogic practices and a guided meditation`;
    },
    p4: 'We look forward to having you with us :)',
    p5: 'Please ensure that you connect at least 5 minutes before the session.',
    ul: [
      'The session will include some yogic practices and a guided meditation',
      function (duration) {
        return `Dedicate ${duration} minutes exclusively for this session`;
      },
      'It is best to avoid any interruptions or distractions like getting up, eating, drinking, or going to the restroom during the session',
      'If you have children or pets that might interrupt or distract you, please ensure that they are taken care of for the duration of the session',
      'You should be somewhat hungry or on a light stomach, which is the optimal condition (1.5 hours after a meal) to do the yogic practices taught in the webinar',
      'Ensure you have a steady internet connection',
      'It is best to connect through a laptop and keep your phone switched off',
      'It would be ideal to use headphones for best audio clarity'
    ],
    btn1: 'Join Now',
    btn2: 'webinar guidelines',
    btn3: 'sharings',
    quotes: {
      wellbeing: 'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      meditation: 'Meditation is an opportunity to move into a dimension where there is no such thing as stress within you.',
      immunity: 'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.'
    },
    errDefault: {
      title: 'Oops, something went wrong.',
      text: 'We were not able to carry out this action.'
    },
    errClassOver: {
      title: 'Oops, the class is already over.',
      text: ''
    },
    errTooEarly: {
      title: "This session hasn't openend yet.",
      text: function (date, time) {
        return `It will begin on ${date} at ${time}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, something went wrong.',
      text: 'This session does not appear to exist.'
    }
  },
  de: {
    h1: 'Live Webinar',
    h2: function (title) {
      return `Isha Online Offerings: ${title}`;
    },
    h3: 'Um die bestmögliche Erfahrung sicherzustellen, befolge bitte die unten stehenden Richtlinien:',
    h4: 'Für zusätzlichen Support kontaktiere:',
    p1: 'Isha Online Offerings',
    p2: function (title) {
      return `The ${title} session includes some yogic practices and a guided meditation`;
    },
    p5: 'Bereite sorge dafür, dass du bereits spätestens 5 Minuten vor Beginn dich hinsetzt und bereit bist. ',
    ul: [
      'The session will include some yogic practices and a guided meditation',
      function (duration) {
        return `Widme dieser Sitzung ${duration} Minuten.`;
      },
      'Bitte vermeide Unterbrechungen und Ablenkungen wie aufstehen, essen, trinken oder benutzen der Toilette während der Sitzung. ',
      'Wenn du Kinder oder Haustiere hast, die dich möglicherweise unterbrechen oder ablenken, stelle sicher, dass sie für die Dauer der Sitzung betreut werden.',
      'Du solltest einen leichten Magenzustand haben, dies ist die optimale Voraussetzung um die Yoga-Übungen zu machen (es muss ein Abstand von mindestens 1,5 Stunden nach deiner letzten Mahlzeit bestehen), die im Webinar vorkommen.',
      'Stelle sicher, dass du eine stabile Internetverbindung hast. ',
      'Es ist am besten, die Verbindung über einen Laptop oder einen Desktop herzustellen und dein Telefon auszuschalten.',
      'It would be ideal to use headphones for best audio clarity'
    ],
    btn1: 'Nimm teil',
    btn2: 'webinar guidelines',
    btn3: 'sharings',
    quotes: {
      wellbeing: '',
      meditation: '',
      immunity: ''
    },
    errDefault: {
      title: 'Oops, something went wrong.',
      text: 'We were not able to carry out this action.'
    },
    errClassOver: {
      title: 'Oops, the class is already over.',
      text: ''
    },
    errTooEarly: {
      title: "This session hasn't openend yet.",
      text: function (date, time) {
        return `It will begin on ${date} at ${time}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, something went wrong.',
      text: 'This session does not appear to exist.'
    }
  }
};

export default pageText;
