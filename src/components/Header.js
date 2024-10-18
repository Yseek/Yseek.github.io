import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 16px;
  text-align: center;
  position: relative; /* HeaderWrapper에 relative 추가 */
`;

const HeaderImageContainer = styled.div`
  height: 300px; /* 원하는 높이 설정 */
  overflow: hidden; /* 초과하는 부분 잘리도록 설정 */
`;

const HeaderImage = styled.img`
  width: 100%; /* 이미지가 컨테이너의 너비에 맞게 조정 */
  height: auto; /* 비율 유지 */
  object-fit: cover; /* 컨테이너를 채우되 비율 유지 */
`;

const HeaderTitle = styled.h1`
  position: absolute; /* 이미지 위에 절대 위치로 배치 */
  top: 50%; /* 컨테이너의 중앙에 위치하도록 조정 */
  left: 50%; /* 중앙 정렬을 위해 왼쪽에서 중앙으로 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위해 변환 */
  color: white; /* 텍스트 색상 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 효과 (선택 사항) */
  margin: 0; /* 기본 여백 제거 */
`;
const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderImageContainer>
          <HeaderImage src="https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg" alt="Blog Header" />
        </HeaderImageContainer>
        <HeaderTitle>테스트 깃허브 블로그</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
