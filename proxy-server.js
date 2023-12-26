const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const newsApiUrl = 'https://newsapi.org/v2/top-headlines?q=bitcoin&language=en&country=us';

fetch(corsAnywhereUrl + newsApiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });
