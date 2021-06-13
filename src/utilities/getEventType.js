const getEventType = (eventString) => {
  if (eventString) {
    const strArr = eventString.split(' ');
    if (strArr.filter((i) => i === 'Wellbeing').length > 0) {
      return 'wellbeing';
    }
    if (strArr.filter((i) => i === 'Meditation').length > 0) {
      return 'meditation';
    }
    if (strArr.filter((i) => i === 'Immunity').length > 0) {
      return 'immunity';
    }
  }

  return 'wellbeing'
};

export default getEventType;
