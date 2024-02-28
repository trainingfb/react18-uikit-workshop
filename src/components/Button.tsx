// components/Button.tsx

import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'success' | 'danger';
  // onClick?: (e: React.MouseEvent) => void;
}

export function Button (
  props: PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    variant = 'primary',
    children,
    ...rest
  } = props;

  /*NEW*/
  return (
    <button
      {...rest}
      className={clsx(
        'px-3 py-1 rounded-xl  transition disabled:opacity-35 disabled:pointer-events-none',
        {
          'bg-sky-400 hover:bg-sky-700 hover:text-white': variant === 'primary',
          'bg-green-400 hover:bg-green-700 hover:text-white': variant === 'success',
          'bg-red-400 hover:bg-red-700 hover:text-white': variant === 'danger',
        },

      )}
    >{children}</button>
  )
}

