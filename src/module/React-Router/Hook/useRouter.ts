import { useContext } from 'react';
import { RouterContext } from '../Router';

type useRouterReturnType = {
  currentPath: string;
  push: (path: string) => void;
};
export const useRouter = (): useRouterReturnType => {
  const value = useContext(RouterContext);

  if (!value) {
    throw new Error('훅이 컴포넌트가 아닌 장소에서 호출되었습니다.');
  }

  return {
    currentPath: value.currentPath,
    push: (to: string) => value.changePath(to),
  };
};
