import EVENTS from '../data/events';

const getEventType = (eventString, eventCategory) => {

  let eventType

  if (eventCategory === 'yogaveera') {
    console.log('triggered yogaveera')
    for (let i = 0; i < EVENTS.yogaveera.wellbeing.titles.length; i++) {
      if(eventString.match(EVENTS.yogaveera.wellbeing.titles[i])){
        eventType = 'wellbeing'
      }
    }
    for (let i = 0; i < EVENTS.yogaveera.meditation.titles.length; i++) {
      if(eventString.match(EVENTS.yogaveera.meditation.titles[i])){
        eventType = 'meditation'
      }
    }
    for (let i = 0; i < EVENTS.yogaveera.immunity.titles.length; i++) {
      if(eventString.match(EVENTS.yogaveera.immunity.titles[i])){
        eventType = 'immunity'
      }
    }
  }
  
  if (eventCategory === 'foundation') {
    for (let i = 0; i < EVENTS.foundation.food.titles.length; i++) {
      if(eventString.match(EVENTS.foundation.food.titles[i])){
        eventType = 'food'
      }
    }
    for (let i = 0; i < EVENTS.foundation.immunityFoundation.titles.length; i++) {
      if(eventString.match(EVENTS.foundation.immunityFoundation.titles[i])){
        eventType = 'immunityFoundation'
      }
    }
    console.log('estring:',eventString,'earr:', EVENTS.foundation.meditationFoundation.titles)
    for (let i = 0; i < EVENTS.foundation.meditationFoundation.titles.length; i++) {
      if(eventString.match(EVENTS.foundation.meditationFoundation.titles[i])){
        eventType = 'meditationFoundation'
      }
    }
    for (let i = 0; i < EVENTS.foundation.ie.titles.length; i++) {
      if(eventString.match(EVENTS.foundation.ie.titles[i])){
        eventType = 'ie'
      }
    }
    for (let i = 0; i < EVENTS.foundation.success.titles.length; i++) {
      if(eventString.match(EVENTS.foundation.success.titles[i])){
        eventType = 'success'
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
