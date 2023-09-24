import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 12px;
  margin: 24px;
`;

export const Link = styled(RouterLink)(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
    text-decoration: underline;
  `,
);
