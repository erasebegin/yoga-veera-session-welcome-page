import EVENTS from '../data/events';

// determines the type of event (and therefore which data set to use) based on
// eventTitle provided in url params

const getEventType = (eventTitle) => {
  let eventType;

  if (eventTitle) {
    // first check if the event is related to upa
    if (eventTitle.includes('upa')) {
      if (eventTitle.includes('110')) {
        // if 110 (the event duration) is found in the title,
        // this means it is the longer variant of the upa program
        eventType = 'upaAdvanced';
        return eventType;
      } else {
        // if 110 is not found in the title,
        // default to 'upa' which has a duration of 80 mins
        eventType = 'upa';
        return eventType;
      }
    }

    for (let i = 0; i < Object.keys(EVENTS).length; i++) {
      let current = Object.keys(EVENTS)[i];
      for (let j = 0; j < EVENTS[current].titles.length; j++) {
        if (
          eventTitle
            .toLowerCase()
            .match(EVENTS[current].titles[j].toLowerCase())
        ) {
          eventType = current;
        }
      }
    }
  }

  return eventType ? eventType : 'Getting event type failed';
};

export default getEventType;

// titles to use for testing purposes:

// YOGA VEERA

// Yoga for Wellbeing
// Meditation for Beginners
// Yoga for Immunity

// Yoga für das Wohlbefinden
// Meditation für Anfänger
// Yoga für das Immunsystem

// Yoga pour le bien-être
// Méditation pour débutants
// Yoga pour l'immunité

// Yoga per il Benessere
// Meditazione per Principianti
// Yoga per il Sistema Immunitario

// Yoga para el bienestar
// Meditación para principiantes
// Yoga para la inmunidad

// Йога для благополучия
// Медитация для начинающих
// Йога для иммунитета

// FOUNDATION

// Food for Wellbeing -
// Yoga for Success -
// Yoga for Immunity -
// Meditation for Mental Wellbeing -
// Introduction to Inner Engineering -

// Yoga pour le succès -
// Yoga pour l'immunité -
// Méditation pour le bien-être mental -
// Présentation d'Ingénierie Intérieure -

// Yoga für Erfolg -
// Yoga für das Immunsystem -
// Meditation für psychische Gesundheit -
// Einführung zu Inner Engineering -
