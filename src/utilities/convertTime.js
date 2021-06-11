export const toMiliseconds = (minutes) => {
  return minutes * 60 * 1000;
};

export const formatDate = (date) => {
  const split = date.split('-').slice(0, 3);
  const rearrange = [split[2], split[1], split[0]];
  const join = rearrange.join('/');
  return join;
};

export const formatTime = (time) => {
  const slice = time.slice(11, time.length);
  const replace = slice.replace('-',':');
  return replace
};
