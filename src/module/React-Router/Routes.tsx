import { useFindTargetChild } from './Hook/useFindTargetChild';

interface Props {
  children: JSX.Element | JSX.Element[];
}
function Routes({ children }: Props) {
  // Routes의 관심사 = 현재 path를 확인하여서 해당하는 Route Component를 리턴한다.
  children = Array.isArray(children) ? children : [children];

  return <>{useFindTargetChild(children)}</>;
}

export default Routes;
