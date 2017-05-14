const fetchedSources = [
  {
    id: 'abc-news-au',
    name: 'ABC News (AU)',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'al-jazeera-english',
    name: 'Al Jazeera English',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'ars-technica',
    name: 'Ars Technica',
    category: 'technology',
    sortBysAvailable: ['top']
  },
  {
    id: 'associated-press',
    name: 'Associated Press',
    category: 'general',
    sortBysAvailable: ['top']
  },
  {
    id: 'bbc-news',
    name: 'BBC News',
    category: 'general',
    sortBysAvailable: ['top']
  }],
  fetchedArticles = {
    status: 'ok',
    source: 'mai-news',
    sortBy: 'top',
    articles: [
      {
        author: 'Mai',
        title: 'Veo Robotics',
        description: `Everyone knows the robots are coming, 
          so we should probably get to work figuring out how we can coexist. 
          That's the mission of Veo Robotics, which is working..`,
        url: 'https://mai.com/2017/05/02/veo-robotics',
        urlToImage: `https://img.vidible.tv/prod/2017-05/02/5908c4d4b90afb36bf
          71f700/5908c577e9399f530748f123_o_U_v1.jpg?w=764&h=400`,
        publishedAt: '2017-05-02T18:00:24Z',
      },
      {
        author: 'Tommy',
        title: 'I am here',
        description: 'Everyone knows that they can find me here',
        url: 'https://mai.com/2017/05/02/i-am-here',
        urlToImage: `https://img.vidible.tv/prod/2017-05/02/5908c4d4b90afb36bf
          71f700/5908c577e9399f530748f123_o_U_v1.jpg?w=764&h=400`,
        publishedAt: '2017-05-02T18:00:24Z',
      },
      {
        author: 'Babs',
        title: 'Welcome home',
        description: 'Welcome home people',
        url: 'https://mai.com/2017/05/02/welcome-home',
        urlToImage: `https://img.vidible.tv/prod/2017-05/02/5908c4d4b90afb36bf
          71f700/5908c577e9399f530748f123_o_U_v1.jpg?w=764&h=400`,
        publishedAt: '2017-05-02T18:00:24Z',
      }
    ]
  },
  Response = { w3: { ig: 'bola', U3: 'bola@gmail', Paa: 'www.image.com' } };

export { Response, fetchedSources, fetchedArticles };
