interface Props {
  path: string;
  component: JSX.Element;
}
function Route({ path, component }: Props) {
  // Route의 관심사는 전달받는 component를 리턴하는 것(Viewing)
  return component;
}

export default Route;
