import { ReactNode } from 'react';
import { Navigation } from '../Navigation/Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
