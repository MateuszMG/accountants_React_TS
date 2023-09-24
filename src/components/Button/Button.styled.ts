import styled, { css } from 'styled-components';

export const ButtonTag = styled.button(
  ({ theme: { colors } }) => css`
    background-color: ${colors.secondary};
    border-radius: 8px;
    border: none;
    color: ${colors.primary};
    cursor: pointer;
    font-family: 'Roboto-Medium';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    opacity: 1;
    padding: 8px 32px;
  `,
);
