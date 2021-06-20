const getJoinUrl = async () => {
  try {
    const response = await fetch(`/resources/data/config.json`);
    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default getJoinUrl;
