'use client';

import Image, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface StaticImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function StaticImage({ src, ...props }: StaticImageProps) {
  // Don't modify external URLs
  const isExternal = src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:');
  const imageSrc = isExternal ? src : `${basePath}${src.startsWith('/') ? src : `/${src}`}`;

  return <Image {...props} src={imageSrc} />;
}

export default StaticImage;
