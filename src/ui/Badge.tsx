import classNames from 'classnames';
import type { FC } from 'react';

interface BadgeProps {
  title: string;
  variant?: 'default' | 'logo';
}

export const Badge: FC<BadgeProps> = ({ title, variant = 'default' }) => {
  return (
    <div
      className={classNames({
        'rounded bg-brand-dark px-1': variant == 'default',
        'rounded bg-brand-light px-1': variant == 'logo',
      })}
    >
      <p
        className={classNames({
          'text-md leading-thing font-medium text-dark-900':
            variant == 'default',
          'leading-thing text-xl font-semibold uppercase text-dark-900':
            variant == 'logo',
        })}
      >
        {title}
      </p>
    </div>
  );
};
