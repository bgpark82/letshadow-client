import styled from '@emotion/styled';
import React from 'react';

const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

function ProfileImg({ user }: any) {
  return (
    <>
      <Profile src={user.picture} alt="profile" />
    </>
  );
}

export default ProfileImg;
