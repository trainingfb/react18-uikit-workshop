// components/Card.tsx
import { PropsWithChildren } from 'react';
import { IconArrowRight } from './icons/IconArrowRight.tsx';

interface CardProps {
  /**
   * Text shown in the title bar
   */
  title: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export function Card (props: PropsWithChildren<CardProps>) {
  return (
    <div
      className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </a>

      {/*NEW*/}
      <div>
        {props.children}
      </div>

      {
        props.buttonLabel &&
          <a href={props.buttonUrl}
             target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {props.buttonLabel}

            <IconArrowRight/>
          </a>
      }

    </div>
  )
}

