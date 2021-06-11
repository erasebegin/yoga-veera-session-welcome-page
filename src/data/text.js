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
    quote1:
      'If only you can go through difficult times with inner grace, every situation you face will be an opportunity to enhance your life.',
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
    h1: 'German Webinar',
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
    quote1:
      'If only you can go through difficult times with inner grace, every situation you face will be an opportunity to enhance your life.',
    errDefault: {
      title: 'Oops, something went wrong.',
      text: 'We were not able to carry out this action.'
    },
    errClassOver: {
      title: 'Oops, the class is already over',
      text: ''
    },
    errTooEarly: {
      title: "This session hasn't openend yet",
      text: ''
    }
  }
};

export default pageText;
