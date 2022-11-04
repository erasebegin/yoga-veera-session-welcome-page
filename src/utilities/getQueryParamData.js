function queryParamData() {
  function generateParamObject(queryString) {
    const params = new URLSearchParams(queryString);

    const queryObject = {};

    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        queryObject[key] = params.getAll(key);
      } else {
        queryObject[key] = params.get(key);
      }
    }

    return queryObject;
  }

  let parsedParams = null;

  // don't remember why this was necessary either
  if (window.location.hash.length > 0) {
    const windowParams = window.location.search + window.location.hash;
    parsedParams = generateParamObject(windowParams);
  } else {
    parsedParams = generateParamObject(window.location.search);
  }

  return parsedParams;
}

export default queryParamData;
