import AuthFrame from '../../components/templates/AuthFrame';
import useAuthForm from '../../hook/useAuthForm';
import { AxiosClient } from '../../lib/axios';
import { errorBoundary } from '../../lib/errorBoundary';
import { useRouter } from '../../module/React-Router';
import { authTokenEnum } from '../../module/React-Router/Hook/useFindTargetChild';

function SignIn() {
  const { push } = useRouter();
  const { Comp, email, password, isFilled } = useAuthForm();

  const confirmHandler = errorBoundary(async () => {
    const response = await AxiosClient.client.post<{ access_token: string }>(AxiosClient.authEndpoint.signIn.end, {
      email,
      password,
    });
    const token = response.data?.access_token;

    if (response.status === 200 && token) {
      localStorage.setItem(authTokenEnum, token);
      push('/todo');
    }
  });

  return (
    <AuthFrame confirmHandler={confirmHandler} isFilled={isFilled}>
      {Comp}
    </AuthFrame>
  );
}

export default SignIn;
