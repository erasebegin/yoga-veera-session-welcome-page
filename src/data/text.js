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
      'It is best to connect through a laptop and keep your phone switched off'
    ],
    btn1: 'Join Now',
    btn2: 'webinar guidelines',
    btn3: 'sharings',
    quotes: {
      wellbeing:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      meditation:
        'Meditation is an opportunity to move into a dimension where there is no such thing as stress within you.',
      immunity:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      immunityFoundation:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      meditationFoundation:
        'Meditation is the only freedom from stress, tension, and anxiety.',
      success:
        'If you want to be successful, don’t seek success – seek competence, empowerment; do nothing short of the best that you can do.',
      ie: 'If only you can go through difficult times with inner grace, every situation you face will be an opportunity to enhance your life.',
      food: 'The true joy of eating is in being conscious that another life is willing to become a part of you.'
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
      text: function (date, time, timeZone) {
        return `It will begin on ${date} at ${time+' '+timeZone}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, something went wrong',
      text: 'This session does not appear to exist.'
    },
    errSub: "If something doesn't seem right please email us at:"
  },
  it: {
    h1: 'Webinar dal vivo',
    h2: function (title) {
      return `Offerte online di Isha: ${title}`;
    },
    h3: 'Segui queste linee guida per assicurarti la migliore esperinza possibile:',
    h4: 'Per ulteriore aiuto:',
    p2: function (title) {
      return `La sessione ${title} include alcune pratiche yogiche e una meditazione guidata`;
    },
    p5: "Perfavore assicurati di essere pronto almeno 5 minuti prima dell'inizio della sessione.",
    ul: [
      function (duration) {
        return `Dedica ${duration} minuti a questa sessione.`;
      },
      'Perfavore evita qualisiasi interruzione o distrazione come alzarti, mangiare, bere o andare al bagno durante la sessione',
      'Se hai dei bambini o animali domestici che potrebbero interromeprti o distrarti, perfavore assicurati che qualcuno se ne occupi per la durata della sessione',
      'Dovresti praticare con una leggera fame o a stomaco vuoto (1.5 ore dopo un pasto), questa è la condizione ottimale per fare le pratice yogiche insegnate nel webinar',
      'Assicurati di avere una connessione ad internet stabile',
      "E' ottimale collegarsi da un laptop e tenere il tuo telefono spento"
    ],
    btn1: 'Inizia Adesso',
    btn2: 'linee guida del webinar',
    btn3: 'condivisioni',
    quotes: {
      wellbeing:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      meditation:
        'Meditation is an opportunity to move into a dimension where there is no such thing as stress within you.',
      immunity:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      immunityFoundation:
        'In search of wellbeing, we have done all kinds of insane things on this planet, but wellbeing has not happened. If wellbeing is what you seek, in is the only way out.',
      meditationFoundation:
        'Meditation is the only freedom from stress, tension, and anxiety.',
      success:
        'If you want to be successful, don’t seek success – seek competence, empowerment; do nothing short of the best that you can do.',
      ie: 'If only you can go through difficult times with inner grace, every situation you face will be an opportunity to enhance your life.',
      food: 'The true joy of eating is in being conscious that another life is willing to become a part of you.'
    },
    errDefault: {
      title: 'Ops, qualcosa è andato storto',
      text: 'Non siamo stati in grado di eseguire questa azione.'
    },
    errClassOver: {
      title: 'Ops, la sessione è già finita',
      text: ''
    },
    errTooEarly: {
      title: 'Questa sessione non è ancora iniziata',
      text: function (date, time,timeZone) {
        return `Inizierà il ${date} alle ${time+' '+timeZone}.`;
      }
    },
    errNoUrl: {
      title: 'Ops, qualcosa è andato storto',
      text: 'Questa sessione non sembra esistere.'
    },
    errSub: "Se qualcosa non ti sembra giusto, mandaci un'email a:"
  },
  ru: {
    h1: 'Вебинар в прямом эфире',
    h2: function (title) {
      return `Онлайн-предложения «Иши»: ${title}`;
    },
    h3: 'Чтобы извлечь максимальную пользу от вебинара, пожалуйста, следуйте этим рекомендациям:',
    h4: 'За дополнительной информацией обращайтесь:',
    p2: function (title) {
      return `Сессия ${title} должно включать названия йогических практик и направленной медитации`;
    },
    p5: 'Пожалуйста, убедитесь, что вы готовы и присоединились к сессии не позднее, чем за 5 минут до её начала.',
    ul: [
      function (duration) {
        return `Уделите данной сессии ${duration} минут`;
      },
      'Пожалуйста, не прерывайте занятие и не отвлекайтесь на то, чтобы вставать, есть, пить или ходить в туалет во время сессии',
      'Если у Вас есть дети или питомцы, пожалуйста, убедитесь, что они не будут отвлекать Вас во время сессии',
      'Участие в сессии рекомендуется на лёгкий желудок, т.е. когда вы немного голодны (через 1,5 часа после еды) — это оптимальное состояние для прохождения йогических практик вебинара',
      'Убедитесь, что ваше интернет-соединение стабильно',
      'Рекоммендуется проходить сессию, используя компьютер и отключив телефон'
    ],
    btn1: 'Присоединиться',
    btn2: 'рекомендации по проведению вебинара',
    btn3: 'отзывы',
    quotes: {
      wellbeing:
        'Стремясь к благополучию, мы совершили самые безумные действия на этой планете, но благополучие не настало. Если благополучие — это то, к чему вы стремитесь, заглянуть в себя — это единственный выход.',
      meditation:
        'Медитация — это возможность начать движение по направлению к измерению, где вы не будете испытывать стресс внутри себя.',
      immunity:
        'Стремясь к благополучию, мы совершили самые безумные действия на этой планете, но благополучие не настало. Если благополучие — это то, к чему вы стремитесь, заглянуть в себя — это единственный выход.',
      immunityFoundation:
        'Стремясь к благополучию, мы совершили самые безумные действия на этой планете, но благополучие не настало. Если благополучие — это то, к чему вы стремитесь, заглянуть в себя — это единственный выход.',
      meditationFoundation:
        'Медитация — это единственный способ избавиться от стресса, напряжения и беспокойства.',
      success:
        'Если вы хотите быть успешными, не стремитесь к успеху — стремитесь к раскрытию своих способностей и возможностей; делайте только лучшее, на что вы способны.',
      ie: 'Если вы сможете проходить через сложности с внутренней благостью, каждая ситуация с которой вы столкнетесь станет для вас возможностью улучшить свою жизнь.',
      food: 'Подлинное удовольствие от еды — это осознавать, как другая жизнь стремится стать частью вас.'
    },
    errDefault: {
      title: 'Упс, что-то пошло не так',
      text: 'Это действие не может быть выполнено.'
    },
    errClassOver: {
      title: 'Упс, сессия уже завершилась',
      text: ''
    },
    errTooEarly: {
      title: 'Эта сессия еще не началась',
      text: function (date, time,timeZone) {
        return `Сессия начнется ${date} в ${time+' '+timeZone}.`;
      }
    },
    errNoUrl: {
      title: 'Упс, что-то пошло не так',
      text: 'Эта сессия, похоже, не существует.'
    },
    errSub:
      'Если что-то кажется неправильным, пожалуйста, напишите нам по адресу:'
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
      'Es mejor conectarte a través de un ordenador portátil y mantener el teléfono apagado.'
    ],
    btn1: 'Únete ahora',
    btn2: 'directrices del seminario web',
    btn3: 'compartir',
    quotes: {
      wellbeing:
        'En busca de bienestar, hemos hecho todo tipo de cosas descabelladas en este planeta, pero no ha sucedido el bienestar. Si lo que buscas es bienestar, la única salida es ir hacia dentro.',
      meditation:
        'La meditación es una oportunidad para entrar en una dimensión en la que no hay nada de estrés en tu interior.',
      immunity:
        'En busca de bienestar, hemos hecho todo tipo de cosas descabelladas en este planeta, pero no ha sucedido el bienestar. Si lo que buscas es bienestar, la única salida es ir hacia dentro.',
      immunityFoundation:
        'En busca de bienestar, hemos hecho todo tipo de cosas descabelladas en este planeta, pero no ha sucedido el bienestar. Si lo que buscas es bienestar, la única salida es ir hacia dentro.',
      meditationFoundation:
        'La meditación es la única forma de librarse del estrés, la tensión y la ansiedad.',
      success:
        'Si quieres tener éxito, no busques el éxito: busca la competencia, el empoderamiento; no hagas nada menos que lo mejor que puedas hacer.',
      ie: 'Si tan solo puedes atravesar los momentos difíciles con gracia interior, cada situación que afrontes será una oportunidad para mejorar tu vida.',
      food: 'La verdadera alegría de comer está en ser consciente de que otra vida está dispuesta a convertirse en parte de ti.'
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
      title: 'Esta sesión aún no ha comenzado',
      text: function (date, time,timeZone) {
        return `Comenzará en ${date} a ${time+' '+timeZone}.`;
      }
    },
    errNoUrl: {
      title: 'Oops, algo ha salido mal',
      text: 'Esta sesión no parece existir.'
    },
    errSub: 'Si algo no le parece bien, envíenos un correo electrónico a:'
  },
  fr: {
    h1: 'Webinaire en direct',
    h2: function (title) {
      return `Offres en ligne d'Isha : ${title}`;
    },
    h3: 'Pour créer la meilleure expérience possible, veuillez suivre les instructions suivantes:',
    h4: "Pour plus d'aide :",
    p2: function (title) {
      return `La session ${title} comprendra quelques pratiques yogiques et une méditation guidée.`;
    },
    p5: "Veuillez vous assurer d'être assis et prêt au moins 5 minutes avant la séance.",
    ul: [
      function (duration) {
        return `Consacrez ${duration} minutes à cette session.`;
      },
      'Veuillez éviter toute interruption ou distraction comme se lever, manger, boire ou aller aux toilettes pendant la session.',
      "Si vous avez des enfants ou des animaux qui pourraient vous interrompre ou vous distraire, veuillez vous assurer qu'ils sont pris en charge le temps de la session.",
      "Vous devriez avoir un peu faim ou avoir l'estomac léger, ce sont les conditions optimales (1h30 après un repas) pour faire les pratiques de yoga enseignées dans le webinaire.",
      "Assurez-vous d'avoir une connexion internet stable.",
      "L'idéal est de vous connecter sur un ordinateur et d'éteindre votre téléphone"
    ],
    btn1: 'Participer',
    btn2: 'directives pour le webinaire',
    btn3: 'partages',
    quotes: {
      wellbeing:
        "En quête de bien-être, nous avons fait toutes sortes de choses folles sur cette planète, mais le bien-être n'est pas arrivé. Si c'est le bien-être que vous recherchez, la seule issue est à l'intérieur.",
      meditation:
        'La peur, la colère et le stress sont des poisons que vous créez. Si vous prenez la chose en main, vous pouvez créer une chimie de félicité. Façonnez votre bien-être intérieur.',
      immunity:
        'Si vous êtes exubérant, joyeux, et merveilleux, votre système immunitaire fonctionnera bien mieux que si vous êtes préoccupé. La plénitude de la vie est la santé.',
      immunityFoundation:
        'Si vous êtes exubérant, joyeux, et merveilleux, votre système immunitaire fonctionnera bien mieux que si vous êtes préoccupé. La plénitude de la vie est la santé.',
      meditationFoundation:
        "La méditation est la seule chose qui libère du stress, de la tension et de l'anxiété.",
      success:
        'Si vous voulez réussir, ne recherchez pas la réussite – recherchez la compétence, le développement de vos capacités ; faites toujours tout du mieux que vous pouvez.',
      ie: 'Si vous pouvez traverser les moments difficiles avec grâce intérieurement, chaque situation qui se présente sera une occasion de faire grandir votre vie.',
      food: "La vraie joie de manger est dans le fait d'être conscient qu'une autre vie est prête à devenir une partie de vous."
    },
    errDefault: {
      title: 'Oups, quelque chose a mal tourné',
      text: "Nous n'avons pas été en mesure d'exécuter cette action."
    },
    errClassOver: {
      title: 'Oups, la session est déjà terminée',
      text: ''
    },
    errTooEarly: {
      title: "Cette session n'a pas encore commencé",
      text: function (date, time,timeZone) {
        return `Elle commencera le ${date} à ${time+' '+timeZone}.`;
      }
    },
    errNoUrl: {
      title: 'Oups, quelque chose a mal tourné',
      text: 'Cette session ne semble pas exister.'
    },
    errSub:
      "Si quelque chose ne vous semble pas correct, veuillez nous envoyer un courriel à l'adresse"
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
      'Es ist am besten, die Verbindung über einen Laptop oder einen Desktop herzustellen und dein Telefon auszuschalten.'
    ],
    btn1: 'Nimm teil',
    btn2: 'Webinar-Leitfaden',
    btn3: 'Mitteilungen',
    quotes: {
      wellbeing:
        'Auf der Suche nach Wohlbefinden haben wir alle möglichen verrückten Dinge auf diesem Planeten getan, aber Wohlbefinden ist nicht eingetreten. Wenn Wohlbefinden das ist, was Du suchst, ist der Weg nach innen der einzige Ausweg.',
      meditation:
        'Meditation ist eine Möglichkeit, sich in eine Dimension zu bewegen, in der es nichts derartiges wie Stress in Dir gibt.',
      immunity:
        'Auf der Suche nach Wohlbefinden haben wir alle möglichen verrückten Dinge auf diesem Planeten getan, aber Wohlbefinden ist nicht eingetreten. Wenn Wohlbefinden das ist, was Du suchst, ist der Weg nach innen der einzige Ausweg.',
      immunityFoundation:
        'Auf der Suche nach Wohlbefinden haben wir alle möglichen verrückten Dinge auf diesem Planeten getan, aber Wohlbefinden ist nicht eingetreten. Wenn Wohlbefinden das ist, was Du suchst, ist der Weg nach innen der einzige Ausweg.',
      meditationFoundation:
        'Meditation ist die einzige Freiheit von Stress, Anspannung und Ängsten.',
      success:
        'Wenn Du erfolgreich sein willst, suche nicht den Erfolg - suche die Kompetenz, die Befähigung; mache nichts weniger als das Beste, was Du tun kannst.',
      ie: 'Wenn Du nur mit innerer Anmut durch schwierige Zeiten gehen kannst, wird jede Situation, der Du begegnest, eine Gelegenheit sein, Dein Leben zu verbessern.',
      food: ''
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
      title: 'Diese Sitzung hat noch nicht begonnen',
      text: function (date, time, timeZone) {
        return `Sie wird am ${date} um ${time+' '+timeZone} beginnen`;
      }
    },
    errNoUrl: {
      title: 'Hoppla, da ist etwas schief gelaufen',
      text: 'Diese Sitzung scheint nicht zu existieren.'
    },
    errSub:
      'Wenn Ihnen etwas nicht richtig erscheint, senden Sie uns bitte eine E-Mail an:'
  }
};

export default pageText;
