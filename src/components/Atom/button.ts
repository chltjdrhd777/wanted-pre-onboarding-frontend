import styled from '@emotion/styled';
import { colors } from '../../Styles/theme';

export const Button = styled.button`
  width: 100%;
  min-width: 1rem;
  max-width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid ${colors.indigo};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
