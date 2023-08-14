import { useRouter } from './useRouter';

export const authTokenEnum = 'authToken';

export function useFindTargetChild(children: JSX.Element[]) {
  const { currentPath, push } = useRouter();

  if (currentPath === '/') {
    return push('/signin');
  }

  const authToken = localStorage.getItem(authTokenEnum);
  const authRedirectEnd = ['/signin', '/signup'];
  const authRequiredEnd = ['/todo'];

  if (authToken && authRedirectEnd.includes(currentPath)) {
    return push('/todo');
  }

  if (!authToken && authRequiredEnd.includes(currentPath)) {
    return push('/signin');
  }

  return children.find((child) => child.props.path === currentPath);
}
