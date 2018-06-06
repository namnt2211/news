var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=55abe1c961c34887a1fd682f9dae3a47';


 async function  getNewsfromAPI() {
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        console.log('====================================');
        console.log(responseJson.articles);
        console.log('====================================');
        return responseJson.articles;

      } catch (error) {
        console.error(error);
      }

}

export default API ={
    getNewsfromAPI
};