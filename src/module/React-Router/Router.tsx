import { ReactNode, createContext, useEffect, useState } from 'react';

interface ContextValue {
  currentPath: string;
  changePath: (to: string) => void;
}
export const RouterContext = createContext<ContextValue | null>(null);

interface Props {
  children: ReactNode;
}
function Router({ children }: Props) {
  // Router의 관심사 = 현재 path를 state로 관리하고, getter와 setter을 자식들에게 전파한다.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopstate = (e: PopStateEvent) => {
      console.log('path changed', e.state);
      setCurrentPath(e.state?.path ?? '/');
    };

    window.addEventListener('popstate', onPopstate);
    return () => {
      window.removeEventListener('popstate', onPopstate);
    };
  }, []);

  const changePath = (to: string) => {
    window.history.pushState({ path: to }, '', to);
    setCurrentPath(to);
  };

  const contextValue: ContextValue = {
    currentPath,
    changePath,
  };

  return <RouterContext.Provider value={contextValue}>{children}</RouterContext.Provider>;
}

export default Router;
