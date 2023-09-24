import { css } from 'styled-components';
import { styled } from 'styled-components';

export const Title = styled.h1(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
    margin-top: 20vh;
    text-align: center;
  `,
);
