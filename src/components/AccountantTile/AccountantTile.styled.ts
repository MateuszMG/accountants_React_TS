import { css, styled } from 'styled-components';

export const Tile = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(228, 230, 232, 1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  min-height: 376px;
  padding: 24px;
  width: 300px;
`;

export const Header = styled.header`
  display: flex;
  gap: 16px;
`;

export const Image = styled.img`
  border-radius: 8px;
  background-size: 100%;
`;

export const Name = styled.h1`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  word-break: break-all;
`;

export const Title = styled.p(
  ({ theme: { colors } }) =>
    css`
      color: ${colors.textSecondary};
      font-size: 14px;
      line-height: 20px;
    `,
);

export const Text = styled.p`
  line-height: 24px;
  word-break: break-all;
`;

export const CurrencyWrapper = styled.div`
  align-items: end;
  display: flex;
  gap: 4px;
`;

export const Currency = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
