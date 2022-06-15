export const exerciseOptions = {
  method: "GET",
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": "c7a5579591mshdb6041246042e02p161e72jsn92586ead9b97",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7a5579591mshdb6041246042e02p161e72jsn92586ead9b97",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
