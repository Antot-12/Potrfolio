// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: process.env.BASE_PATH || '',
//   images: {
//     unoptimized: true,
//   },
// };
//
// module.exports = nextConfig;
//
// const { withContentlayer } = require('next-contentlayer2');
//
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
//
// // You might need to insert additional domains in script-src if you are using external services
// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
//   style-src 'self' 'unsafe-inline';
//   img-src * blob: data:;
//   media-src *.s3.amazonaws.com;
//   connect-src *;
//   font-src 'self';
//   frame-src giscus.app *.github.io
// `;
//
// const securityHeaders = [
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\n/g, ''),
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
//   {
//     key: 'Referrer-Policy',
//     value: 'strict-origin-when-cross-origin',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=31536000; includeSubDomains',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
//   {
//     key: 'Permissions-Policy',
//     value: 'camera=(), microphone=(), geolocation=()',
//   },
// ];
//
// const output = process.env.EXPORT ? 'export' : undefined;
// const basePath = process.env.BASE_PATH || undefined;
// const unoptimized = process.env.UNOPTIMIZED ? true : undefined;
//
// /**
//  * @type {import('next/dist/next-server/server/config').NextConfig}
//  **/
// module.exports = () => {
//   const plugins = [withContentlayer, withBundleAnalyzer];
//   return plugins.reduce((acc, next) => next(acc), {
//     output,
//     basePath,
//     reactStrictMode: true,
//     pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//     eslint: {
//       dirs: ['app', 'components', 'layouts', 'scripts'],
//     },
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'i.scdn.co', // Spotify album covers
//         },
//       ],
//       unoptimized,
//     },
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: securityHeaders,
//         },
//       ];
//     },
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: [
//           {
//             loader: '@svgr/webpack',
//             options: {
//               svgoConfig: {
//                 plugins: [
//                   {
//                     name: 'prefixIds',
//                     params: {
//                       delim: '__',
//                       prefixIds: true,
//                       prefixClassNames: true,
//                     },
//                   },
//                 ],
//               },
//             },
//           },
//         ],
//       });
//
//       return config;
//     },
//   });
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require('next-contentlayer2');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app *.github.io
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const output = process.env.EXPORT ? 'export' : undefined;
const basePath = process.env.BASE_PATH || undefined;
const unoptimized = process.env.UNOPTIMIZED ? true : undefined;

module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer];
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
        },
      ],
      unoptimized,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'prefixIds',
                    params: {
                      delim: '__',
                      prefixIds: true,
                      prefixClassNames: true,
                    },
                  },
                ],
              },
            },
          },
        ],
      });

      return config;
    },
    onError: (err) => {
      if (!(err instanceof Error)) {
        throw new Error('An unexpected error occurred');
      }
      throw err;
    },
  });
};
