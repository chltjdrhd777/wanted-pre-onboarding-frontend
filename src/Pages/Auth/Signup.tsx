import React from 'react';
import AuthFrame from '../../components/templates/AuthFrame';
import useAuthForm from '../../hook/useAuthForm';
import { AxiosClient } from '../../lib/axios';
import { useRouter } from '../../module/React-Router';
import { errorBoundary } from '../../lib/errorBoundary';

function Signup() {
  const { push } = useRouter();
  const { Comp, email, password, isFilled } = useAuthForm();

  const confirmHandler = errorBoundary(async () => {
    const response = await AxiosClient.client.post(AxiosClient.authEndpoint.signUp.end, {
      email,
      password,
    });

    if (response.status === 201) {
      push('/signin');
    }
  });

  return (
    <AuthFrame confirmHandler={confirmHandler} isFilled={isFilled}>
      {Comp}
    </AuthFrame>
  );
}

export default Signup;
