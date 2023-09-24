import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonTag } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, ...rest }: ButtonProps, ref) => {
    return (
      <ButtonTag {...rest} ref={ref}>
        {children}
      </ButtonTag>
    );
  },
);
