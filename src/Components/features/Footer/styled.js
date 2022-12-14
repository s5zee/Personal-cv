import styled from "styled-components";

export const Container = styled.div`
  max-width: 691px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 48px;
  }
`;

export const EmailAdress = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  margin-top: 24px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.scienceBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    line-height: 22px;
    padding-top: 4px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    line-height: 22px;
    margin-top: 12px;
  }
`;

export const ExternalLinksContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 40px;
    gap: 16px;
  }
`;

export const Link = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.mineShaft};
  width: 48px;
  height: 48px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.scienceBlue};
  }
`;
