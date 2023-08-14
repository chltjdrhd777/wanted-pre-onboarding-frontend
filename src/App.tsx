import styled from '@emotion/styled';
import Routing from './Routing';
import { gradients } from './Styles/theme';

function App() {
  return (
    <Main>
      <Content>
        <Routing />
      </Content>
    </Main>
  );
}

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: ${gradients.pointGraidentBlue};
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
