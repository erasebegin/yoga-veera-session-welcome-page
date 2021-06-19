import EVENTS from '../data/events';

const getEventType = (eventString) => {
  let eventType;

  if (eventString) {
    for (let i = 0; i < EVENTS.wellbeing.titles.length; i++) {
      if (eventString.match(EVENTS.wellbeing.titles[i])) {
        eventType = 'wellbeing';
      }
    }
    for (let i = 0; i < EVENTS.meditation.titles.length; i++) {
      if (eventString.match(EVENTS.meditation.titles[i])) {
        eventType = 'meditation';
      }
    }
    for (let i = 0; i < EVENTS.immunity.titles.length; i++) {
      if (eventString.match(EVENTS.immunity.titles[i])) {
        eventType = 'immunity';
      }
    }
    for (let i = 0; i < EVENTS.food.titles.length; i++) {
      if (eventString.match(EVENTS.food.titles[i])) {
        eventType = 'food';
      }
    }
    for (let i = 0; i < EVENTS.immunityFoundation.titles.length; i++) {
      if (eventString.match(EVENTS.immunityFoundation.titles[i])) {
        eventType = 'immunityFoundation';
      }
    }
    for (let i = 0; i < EVENTS.meditationFoundation.titles.length; i++) {
      if (eventString.match(EVENTS.meditationFoundation.titles[i])) {
        eventType = 'meditationFoundation';
      }
    }
    for (let i = 0; i < EVENTS.ie.titles.length; i++) {
      if (eventString.match(EVENTS.ie.titles[i])) {
        eventType = 'ie';
      }
    }
    for (let i = 0; i < EVENTS.success.titles.length; i++) {
      if (eventString.match(EVENTS.success.titles[i])) {
        eventType = 'success';
      }
    }
  }

  return eventType ? eventType : null;
};

export default getEventType;

// program_name	program_category

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
