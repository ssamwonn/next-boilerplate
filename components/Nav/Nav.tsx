import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const onPageRouting = () => {
    router.push('/auth/login');
  };

  return (
    <NavLayout>
      <LogoContainer>
        <LogoBox>
          <Image
            className="kjm"
            src="/images/KJM_logo.svg"
            alt="logo"
            width={175}
            height={40}
          ></Image>
        </LogoBox>
        <SignInButton onClick={onPageRouting}>로그인</SignInButton>
      </LogoContainer>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.div`
  padding: 2rem;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: right;
`;
const LogoBox = styled.div`
  min-width: 5rem;
`;
const SignInButton = styled.button``;
