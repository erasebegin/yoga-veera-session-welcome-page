import image from './images/online_offering.jpg';
import logo from './images/isha-logo.png';
import flower from './images/flower.png';

export const pageText = [
  {
    lang: 'en',
    titles: {
      wellbeing: 'Yoga for Wellbeing',
      immunity: 'Yoga for Immunity',
      meditation: 'Meditation for Beginners'
    },
    timings: {
      wellbeing: '40',
      immunity: '30',
      meditation: '60'
    },
    content: {
      h1: 'Online Offerings',
      h2: function (title) {
        return `Isha Online Offerings: ${title}`;
      },
      p1: 'Isha Online Offerings',
      p2: 'It is wonderful to see your interest in taking this step towards your wellbeing.',
      h3: function (title) {
        return `To best receive the ${title} session, please follow the below guidelines:`;
      },
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
      p3: 'If you need any support or clarification, please reach out to us at <a href="mailto:online.programs@ishafoundation.org">online.programs@ishafoundation.org</a>',
      p4: 'We look forward to having you with us :)',
      btn: 'Join Now',
      p5: 'Please ensure that you connect at least 5 minutes before the session.'
    }
  },
  {
    lang: 'de',
    content: {
      h1: 'Isha Online Offerings : Europe - Public - Yoga for Success',
      p1: 'Isha Online Offerings',
      p2: 'It is wonderful to see your interest in taking this step towards your well-being.',
      h2: 'To best receive the Europe - Public - Yoga for Success webinar, please follow the below guidelines:',
      ul: [
        'The session will include some yogic practices and a guided meditation',
        'Dedicate 60 minutes exclusively for this session',
        'It is best to avoid any interruptions or distractions like getting up, eating, drinking, or going to the restroom during the session',
        'It is best to avoid any interruptions or distractions like getting up, eating, drinking, or going to the restroom during the session',
        'It is best to avoid any interruptions or distractions like getting up, eating, drinking, or going to the restroom during the session',
        'If you have children or pets that might interrupt or distract you, please ensure that they are taken care of for the duration of the session',
        'You should be somewhat hungry or on a light stomach, which is the optimal condition (1.5 hours after a meal) to do the yogic practices taught in the webinar',
        'Ensure you have a steady internet connection',
        'It is best to connect through a laptop and keep your phone switched off',
        'It would be ideal to use headphones for best audio clarity'
      ],
      p3: 'If you need any support or clarification, please reach out to us at online.programs@ishafoundation.org',
      p4: 'We look forward to having you with us :)',
      btn: 'Join Now',
      p5: 'Please ensure that you connect at least 5 minutes before the session.'
    }
  }
];

export const media = {
  headerImage: [
    {
      type: 'wellbeing',
      image: image,
      description:
        'foreground: hands holding phone displaying image of person practicing yoga. background: laptop on table displaying same image as phone'
    },
    {
      type: 'immunity',
      image: image,
      description:
        'foreground: hands holding phone displaying image of person practicing yoga. background: laptop on table displaying same image as phone'
    },
    {
      type: 'meditation:',
      image: image,
      description:
        'foreground: hands holding phone displaying image of person practicing yoga. background: laptop on table displaying same image as phone'
    }
  ],
  logo,
  separator: flower
};
