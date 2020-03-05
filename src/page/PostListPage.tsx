import styled from '@emotion/styled';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemList from '../component/ItemList';

export type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const PostListTemplate = styled.div``;

function PostListPage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await Axios.get(
        'http://newsapi.org/v2/top-headlines?country=us&apiKey=e0d5e6f0615a46e49eba6333a5882d22',
      );
      setArticle(response.data.articles);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!article) {
    return null;
  }

  return (
    <PostListTemplate>
      <ItemList articles={article} />
    </PostListTemplate>
  );
}

export default PostListPage;
