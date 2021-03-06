import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const {REACT_APP_API_KEY} = process.env;

const useVideos = ({defaultSearchTerm}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: REACT_APP_API_KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
