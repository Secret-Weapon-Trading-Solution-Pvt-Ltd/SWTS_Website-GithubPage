'use client';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function imageLoader({ src, width, quality }) {
  // Don't modify external URLs
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }

  // Ensure the path starts with basePath
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;

  // For static export, just return the path with basePath
  return `${basePath}${normalizedSrc}`;
}
