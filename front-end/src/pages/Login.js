import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'smite010@gmail.com' && password === '1234') {
      alert('로그인 성공!');
      navigate('/Home')
    } else {
      setError('잘못된 이메일 또는 비밀번호입니다.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        {error && <Error>{error}</Error>}
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
}

export default Login;