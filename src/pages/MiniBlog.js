import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Header from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
`;

const MiniBlog = () => {
  // 클릭한 게시글 ID를 상태로 관리
  const [selectedPost, setSelectedPost] = useState(null);

  // 게시글 목록
  const posts = [
    { id: 'post1', title: '레거시 프로젝트' },
    { id: 'post2', title: '작성중' }
  ];

  return (
    <Wrapper>
      {/* Header */}
      <Header />
      {/* 사이드바에 게시글 목록 및 클릭 시 호출할 함수 전달 */}
      <Main>
        <Sidebar
          posts={posts}
          onPostClick={(post) => setSelectedPost(post.id)} // 게시글 클릭 시 ID 설정
        />
        {/* 선택된 게시글의 ID를 기반으로 Content에 전달 */}
        <Content postFile={selectedPost} />
      </Main>
    </Wrapper>
  );
};

export default MiniBlog;
