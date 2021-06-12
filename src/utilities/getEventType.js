const getEventType = (eventString) => {
  if (eventString) {
    const strArr = eventString.split(' ');
    if (strArr.filter((i) => i === 'Wellbeing'||'wellbeing').length > 0) {
      return 'wellbeing';
    }
    if (strArr.filter((i) => i === 'Meditation'||'meditation').length > 0) {
      return 'meditation';
    }
    if (strArr.filter((i) => i === 'Immunity'||'immunity').length > 0) {
      return 'immunity';
    }
  }

  return ''
};

export default getEventType;
