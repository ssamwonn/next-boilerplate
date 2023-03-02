import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <LoginPageLayout>
      <LogoBox>Login Test</LogoBox>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <UserId>
          <Input
            id="email"
            type="text"
            placeholder="아이디(이메일)"
            aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
        </UserId>
        {errors.email && <SmallText role="alert">{errors.email!.message}</SmallText>}
        <UserPassword>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호를 사용하세요.',
              },
            })}
          />
        </UserPassword>
        {errors.password && <SmallText role="alert">{errors.password.message}</SmallText>}
        <AccountInfoFind>
          <AccountFindButton>아이디(이메일)/비밀번호찾기</AccountFindButton>
        </AccountInfoFind>
        <LoginButton type="submit" disabled={isSubmitting}>
          로그인
        </LoginButton>
      </form>
      <SignUpButton>회원가입</SignUpButton>
    </LoginPageLayout>
  );
};

export default LoginPage;

const LoginPageLayout = styled.div`
  margin: 0 auto;
  width: 44rem;
  height: 100%;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  background-color: #ffff;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
const LogoBox = styled.div`
  margin-top: 3rem;
  height: 3rem;
  font-size: 2.4rem;
`;
const UserId = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2.4rem;
`;
const UserPassword = styled.div`
  margin-bottom: 2rem;
  height: 4rem;
  font-size: 2.4rem;
`;
const LoginButton = styled.button`
  width: 100%;
  height: 5rem;
  text-align: center;
  background-color: #0074e9;
  color: #fff;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  padding: 16px 17px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
`;
const SignUpButton = styled.div`
  height: 5rem;
  text-align: center;
  color: #0074e9;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  padding: 16px 17px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
`;
const AccountInfoFind = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  color: #0074e9;
  font-size: 14px;
  line-height: 20px;
`;
const AccountFindButton = styled.div`
  text-align: right;
  color: #0074e9;
  font-size: 14px;
  line-height: 20px;
`;
const SmallText = styled.small`
  color: red;
  font-size: 14px;
  line-height: 20px;
`;
