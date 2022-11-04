export const toMilliseconds = (minutes) => {
  return minutes * 60 * 1000;
};

export const toSeconds = (minutes) => {
  return minutes * 60;
};

export const formatDate = (date) => {
  if (date) {
    const split = date.split('-').slice(0, 3);
    const rearrange = [split[2], split[1], split[0]];
    const join = rearrange.join('/');
    return join;
  }

  return "error: no date provided";
};

export const formatTime = (time) => {
  if (time) {
    const slice = time.slice(11, time.length);
    const replace = slice.replace('-', ':');
    return replace;
  }
  
  return "error: no time provided";
};

export const parseTzOffset = (tzo) => {
  console.log({tzo})
  let output = tzo;

  if (tzo.startsWith(' ')) {
    const sliced = tzo.slice(1, tzo.length);
    output = '+' + sliced;
  }

  return output;
};
