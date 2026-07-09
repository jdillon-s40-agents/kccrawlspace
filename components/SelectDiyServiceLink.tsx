'use client';
import Link from 'next/link';
import { DIY_SELECT_SERVICE_EVENT } from './AssessmentForm';

export default function SelectDiyServiceLink({
  service,
  href,
  style,
  children,
}: {
  service: 'virtual' | 'in-person';
  href: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={style}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(DIY_SELECT_SERVICE_EVENT, { detail: service }));
      }}
    >
      {children}
    </Link>
  );
}
