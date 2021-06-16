const pageText = {
  en: {
    h1: 'Live Webinar',
    h2: function (title) {
      return `Isha Online Offerings: ${title}`;
    },
    h3: 'To ensure the best possible experience, please follow the guidelines below:',
    h4: 'For Additional Support:',
    p2: function (title) {
      return `The ${title} session includes some yogic practices and a guided meditation`;
    },
    p5: 'Please ensure that you connect at least 5 minutes before the session.',
    ul: [
      function (duration) {
        return `Dedicate ${duration} minutes exclusively for this session`;
      },
      'It is best to avoid any interruptions or distractions like getting up, eating, drinking, or going to the restroom during the session',
      'If you have children or pets that might interrupt or distract you, please ensure that they are taken care of for the duration of the session',
      'You should be somewhat hungry or on a light stomach, which is the optimal condition (1.5 hours after a meal) to do the yogic practices taught in the webinar',
      'Ensure you have a steady internet connection',
      'It is best to connect through a laptop and keep your phone switched off',
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
      title: 'Oops, something went wrong',
      text: 'We were not able to carry out this action.'
    },
    errClassOver: {
      title: 'Oops, this class is already over',
      text: ''
    },
    errTooEarly: {
      title: "This session hasn't started yet",
      text: function (date, time) {
        return `It will begin on ${date} at ${time}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, something went wrong',
      text: 'This session does not appear to exist.'
    },
    errSub: "If something doesn't seem right please email us at:"
  },
  es: {
    h1: 'Webinar en vivo',
    h2: function (title) {
      return `Ofertas de Isha Online: ${title}`;
    },
    h3: 'Para garantizar la mejor experiencia posible, por favor sigue las siguientes pautas:',
    h4: 'Para ayuda adicional:',
    p2: function (title) {
      return `La sesión ${title} incluye algunas prácticas yóguicas y una meditación guiada`;
    },
    p5: 'Asegúrate de estar sentado y listo al menos 5 minutos antes de la sesión.',
    ul: [
      function (duration) {
        return `Dedica ${duration} minutos para esta sesión`;
      },
      'Por favor evita cualquier interrupción o distracción como levantarte, comer, beber o ir al baño durante la sesión.',
      'Si tienes niños o mascotas que puedan interrumpirte o distraerte, asegúrate de que estén atendidos durante toda la sesión.',
      'Debes tener algo de hambre o con el estómago ligero, que es la condición óptima (1,5 horas después de una comida) para realizar las prácticas de yoga que se enseñan en el seminario web.',
      'Asegúrate de tener una conexión estable a Internet.',
      'Es mejor conectarte a través de un ordenador portátil y mantener el teléfono apagado.',
    ],
    btn1: 'Únete ahora',
    btn2: 'directrices del seminario web',
    btn3: 'compartir',
    quotes: {
      wellbeing: 'En busca de bienestar, hemos hecho todo tipo de cosas descabelladas en este planeta, pero no ha sucedido el bienestar. Si lo que buscas es bienestar, la única salida es ir hacia dentro.',
      meditation: 'La meditación es una oportunidad para entrar en una dimensión en la que no hay nada de estrés en tu interior.',
      immunity: 'En busca de bienestar, hemos hecho todo tipo de cosas descabelladas en este planeta, pero no ha sucedido el bienestar. Si lo que buscas es bienestar, la única salida es ir hacia dentro».'
    },
    errDefault: {
      title: 'Oops, algo salió mal',
      text: 'No hemos podido realizar esta acción.'
    },
    errClassOver: {
      title: 'Oops, la sesión ya ha terminado',
      text: ''
    },
    errTooEarly: {
      title: "Esta sesión aún no ha comenzado",
      text: function (date, time) {
        return `Comenzará en ${date} a ${time}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, algo ha salido mal',
      text: 'Esta sesión no parece existir.'
    },
    errSub: "Si algo no le parece bien, envíenos un correo electrónico a:"
  },
  fr: {
    h1: 'Webinaire en direct',
    h2: function (title) {
      return `Offres en ligne d'Isha : ${title}`;
    },
    h3: 'Pour créer la meilleure expérience possible, veuillez suivre les instructions suivantes:',
    h4: 'Pour plus d\'aide :',
    p2: function (title) {
      return `La session ${title} comprendra quelques pratiques yogiques et une méditation guidée.`;
    },
    p5: 'Veuillez vous assurer d\'être assis et prêt au moins 5 minutes avant la séance.',
    ul: [
      function (duration) {
        return `Consacrez ${duration} minutes à cette session.`;
      },
      'Veuillez éviter toute interruption ou distraction comme se lever, manger, boire ou aller aux toilettes pendant la session.',
      'Si vous avez des enfants ou des animaux qui pourraient vous interrompre ou vous distraire, veuillez vous assurer qu\'ils sont pris en charge le temps de la session.',
      'Vous devriez avoir un peu faim ou avoir l\'estomac léger, ce sont les conditions optimales (1h30 après un repas) pour faire les pratiques de yoga enseignées dans le webinaire.',
      'Assurez-vous d\'avoir une connexion internet stable.',
      'L\'idéal est de vous connecter sur un ordinateur et d\'éteindre votre téléphone',
    ],
    btn1: 'Participer',
    btn2: 'directives pour le webinaire',
    btn3: 'partages',
    quotes: {
      wellbeing: 'En quête de bien-être, nous avons fait toutes sortes de choses folles sur cette planète, mais le bien-être n\'est pas arrivé. Si c\'est le bien-être que vous recherchez, la seule issue est à l\'intérieur.',
      meditation: 'La peur, la colère et le stress sont des poisons que vous créez. Si vous prenez la chose en main, vous pouvez créer une chimie de félicité. Façonnez votre bien-être intérieur.',
      immunity: 'En quête de bien-être, nous avons fait toutes sortes de choses folles sur cette planète, mais le bien-être n\'est pas arrivé. Si c\'est le bien-être que vous recherchez, la seule issue est à l\'intérieur.'
    },
    errDefault: {
      title: 'Oups, quelque chose a mal tourné',
      text: 'Nous n\'avons pas été en mesure d\'exécuter cette action.'
    },
    errClassOver: {
      title: 'Oups, la session est déjà terminée',
      text: ''
    },
    errTooEarly: {
      title: "Cette session n'a pas encore commencé",
      text: function (date, time) {
        return `Elle commencera le ${date} à ${time}.`;
      }
    },
    errNoUrl: {
      title: 'Oups, quelque chose a mal tourné',
      text: 'Cette session ne semble pas exister.'
    },
    errSub: "Si quelque chose ne vous semble pas correct, veuillez nous envoyer un courriel à l'adresse"
  },
  de: {
    h1: 'Live-Webinar',
    h2: function (title) {
      return `Isha Online-Angebote: ${title}`;
    },
    h3: 'Um die bestmögliche Erfahrung sicherzustellen, befolge bitte die unten stehenden Richtlinien:',
    h4: 'Für zusätzlichen Support kontaktiere:',
    p2: function (title) {
      return `Die ${title} Sitzung beinhaltet einige yogische Praktiken und eine geführte Meditation`;
    },
    p5: 'Bereite sorge dafür, dass du bereits spätestens 5 Minuten vor Beginn dich hinsetzt und bereit bist. ',
    ul: [
      function (duration) {
        return `Widme dieser Sitzung ${duration} Minuten.`;
      },
      'Bitte vermeide Unterbrechungen und Ablenkungen wie aufstehen, essen, trinken oder benutzen der Toilette während der Sitzung. ',
      'Wenn du Kinder oder Haustiere hast, die dich möglicherweise unterbrechen oder ablenken, stelle sicher, dass sie für die Dauer der Sitzung betreut werden.',
      'Du solltest einen leichten Magenzustand haben, dies ist die optimale Voraussetzung um die Yoga-Übungen zu machen (es muss ein Abstand von mindestens 1,5 Stunden nach deiner letzten Mahlzeit bestehen), die im Webinar vorkommen.',
      'Stelle sicher, dass du eine stabile Internetverbindung hast. ',
      'Es ist am besten, die Verbindung über einen Laptop oder einen Desktop herzustellen und dein Telefon auszuschalten.',
    ],
    btn1: 'Nimm teil',
    btn2: 'Webinar-Leitfaden',
    btn3: 'Mitteilungen',
    quotes: {
      wellbeing: 'Auf der Suche nach Wohlbefinden haben wir alle möglichen verrückten Dinge auf diesem Planeten getan, aber Wohlbefinden ist nicht eingetreten. Wenn Wohlbefinden das ist, was Du suchst, ist der Weg nach innen der einzige Ausweg.',
      meditation: 'Meditation ist eine Möglichkeit, sich in eine Dimension zu bewegen, in der es nichts derartiges wie Stress in Dir gibt.',
      immunity: 'Auf der Suche nach Wohlbefinden haben wir alle möglichen verrückten Dinge auf diesem Planeten getan, aber Wohlbefinden ist nicht eingetreten. Wenn Wohlbefinden das ist, was Du suchst, ist der Weg nach innen der einzige Ausweg.'
    },
    errDefault: {
      title: 'Ups, da ist etwas schief gelaufen',
      text: 'Wir waren nicht in der Lage, diese Aktion auszuführen.'
    },
    errClassOver: {
      title: 'Hoppla, die Sitzung ist bereits vorbei',
      text: ''
    },
    errTooEarly: {
      title: "Diese Sitzung hat noch nicht begonnen",
      text: function (date, time) {
        return `Sie wird am ${date} um ${time} beginnen`;
      }
    },
    errNoUrl: {
      title: 'Hoppla, da ist etwas schief gelaufen',
      text: 'Diese Sitzung scheint nicht zu existieren.'
    },
    errSub:"Wenn Ihnen etwas nicht richtig erscheint, senden Sie uns bitte eine E-Mail an:" 
  }
};

export default pageText;
