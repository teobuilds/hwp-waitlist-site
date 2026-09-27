import type { CSSProperties } from 'react';

type Props = {
  price: string;
  compareAtPrice?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Price({ price, compareAtPrice, className, style }: Props) {
  return (
    <p className={className} style={{ color: '#AF94E0', fontWeight: 700, ...style }}>
      {compareAtPrice && (
        <>
          <s style={{ color: '#999999', fontWeight: 600 }}>
            <span className="sr-only">Was </span>
            {compareAtPrice}
          </s>{' '}
          <span className="sr-only">now </span>
        </>
      )}
      {price}
    </p>
  );
}
