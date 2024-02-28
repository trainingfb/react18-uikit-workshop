// components/Heading.tsx

import clsx from 'clsx';

interface HeadingProps {
  size?: number;
}

export  function Heading (props: HeadingProps) {
  const { size = 1 } = props;

  return <h1
    className={clsx({
      'text-5xl': size === 1,
      'text-4xl': size === 2,
      'text-3xl': size === 3,
    })}
  >UIKIT</h1>
}

