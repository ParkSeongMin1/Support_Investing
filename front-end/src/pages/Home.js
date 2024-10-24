import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0ffe0;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('로그아웃되었습니다.');
    navigate('/'); // 로그인 페이지로 이동
  };

  return (
    <Container>
      <div>
        <h1>환영합니다!</h1>
        <Button onClick={handleLogout}>로그아웃</Button>
      </div>
    </Container>
  );
}

export default Home;