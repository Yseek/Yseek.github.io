// src/pages/Home.js
import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 'post1', title: '레거시 프로젝트' },
    { id: 'post2', title: '테스트2' }
  ];

  return (
      <Wrapper>
          <h1>Trouble Shooting</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a onClick={() => setSelectedPost(post.id)}>
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
          
          {selectedPost && <BlogPost postName={selectedPost} />}
    </Wrapper>
  );
};

export default Home;
