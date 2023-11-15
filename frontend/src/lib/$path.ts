const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "blog": {
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash, path: `/blog${buildSuffix(url)}` })
  },
  "record": {
    "preflop": {
      $url: (url?: { hash?: string }) => ({ pathname: '/record/preflop' as const, hash: url?.hash, path: `/record/preflop${buildSuffix(url)}` })
    },
    "setting": {
      $url: (url?: { hash?: string }) => ({ pathname: '/record/setting' as const, hash: url?.hash, path: `/record/setting${buildSuffix(url)}` })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash, path: `/${buildSuffix(url)}` })
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  background_jpg: '/background.jpg',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const;

export type StaticPath = typeof staticPath;
