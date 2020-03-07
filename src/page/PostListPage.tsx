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

function PostListPage({ match }: any) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const header = match.params.category || 'all';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = header === 'all' ? '' : `&category=${header}`;
      const response = await Axios.get(
        `http://newsapi.org/v2/top-headlines?country=us${query}&apiKey=e0d5e6f0615a46e49eba6333a5882d22`,
      );
      console.log(response);
      setArticle(response.data.articles);
      setLoading(false);
    };
    fetchData();
  }, [header]);

  if (loading) {
    return <PostListTemplate>대기 중...</PostListTemplate>;
  }

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
