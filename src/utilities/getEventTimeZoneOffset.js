const getEventTimeZoneOffset = (timeZoneCode) => {
  const timeZones = {
    GMT: 0,
    BST: 60,
    CEST: 120,
    SAST: 120,
    EEST: 180,
    MSK: 180,
    GST: 240,
    IST: 330,
  };

  return timeZones[timeZoneCode]
};

export default getEventTimeZoneOffset;