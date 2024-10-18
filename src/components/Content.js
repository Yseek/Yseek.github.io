import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 20px; /* 원하는 패딩 추가 */
  margin-left: 20px; /* 사이드바와의 간격을 위해 왼쪽 마진 추가 */
  flex-grow: 1; /* 사이드바와 콘텐츠를 가로로 배치할 때 콘텐츠가 남는 공간을 차지하도록 설정 */
`;

const Content = ({ postFile }) => {
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // 파일 경로가 주어지면 해당 Markdown 파일을 불러옴
    if (postFile) {
      axios
        .get(`/posts/${postFile}.md`)
        .then((response) => {
          setPostContent(response.data);
        })
        .catch((error) => {
          console.error('Markdown 파일 로딩 에러:', error);
        });
    }
  }, [postFile]);

  return (
    <ContentWrapper>
      {postContent ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {postContent}
        </ReactMarkdown>
      ) : (
        <p>아직 내용이 없습니다.</p>
      )}
    </ContentWrapper>
  );
};

export default Content;
