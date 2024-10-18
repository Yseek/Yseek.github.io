import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 300px;
  background-color: #e9ecef;
  padding: 16px;
`;

const Profile = styled.div`
  margin-bottom: 24px;
  text-align: center;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  background-color: #f1f3f5;

  &:hover {
    background-color: #dee2e6;
  }
`;

const Sidebar = ({ posts, onPostClick }) => {
  return (
    <SidebarWrapper>
      <Profile>
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <h2>Yseek</h2>
      </Profile>

      <h3>게시글</h3>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id} onClick={() => onPostClick(post)}>
            {post.title}
          </PostItem>
        ))}
      </PostList>
    </SidebarWrapper>
  );
};

export default Sidebar;
