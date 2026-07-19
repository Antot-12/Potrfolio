// import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files';
// import { writeFileSync } from 'fs';
// import readingTime from 'reading-time';
// import { slug } from 'github-slugger';
// import path from 'path';
// import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
// // Remark packages
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import { remarkAlert } from 'remark-github-blockquote-alert';
// import {
//   remarkExtractFrontmatter,
//   remarkCodeTitles,
//   remarkImgToJsx,
//   extractTocHeadings,
// } from 'pliny/mdx-plugins/index.js';
// // Rehype packages
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeKatex from 'rehype-katex';
// import rehypeKatexNoTranslate from 'rehype-katex-notranslate';
// import rehypeCitation from 'rehype-citation';
// import rehypePrismPlus from 'rehype-prism-plus';
// import rehypePresetMinify from 'rehype-preset-minify';
// import siteMetadata from './data/siteMetadata';
// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js';
//
// const root = process.cwd();
// const isProduction = process.env.NODE_ENV === 'production';
//
// // heroicon mini link
// const icon = fromHtmlIsomorphic(
//   `
//   <span class="content-header-link">
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
//   <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
//   <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
//   </svg>
//   </span>
// `,
//   { fragment: true }
// );
//
// const computedFields: ComputedFields = {
//   readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
//   slug: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
//   },
//   path: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath,
//   },
//   filePath: {
//     type: 'string',
//     resolve: (doc) => doc._raw.sourceFilePath,
//   },
//   toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
// };
//
// /**
//  * Count the occurrences of all tags across blog posts and write to json file
//  */
// function createTagCount(allBlogs) {
//   const tagCount: Record<string, number> = {};
//   allBlogs.forEach((file) => {
//     if (file.tags && (!isProduction || file.draft !== true)) {
//       file.tags.forEach((tag) => {
//         const formattedTag = slug(tag);
//         if (formattedTag in tagCount) {
//           tagCount[formattedTag] += 1;
//         } else {
//           tagCount[formattedTag] = 1;
//         }
//       });
//     }
//   });
//   writeFileSync('./app/tag-data.json', JSON.stringify(tagCount));
// }
//
// function createSearchIndex(allBlogs) {
//   if (siteMetadata?.search?.provider === 'kbar' && siteMetadata.search.kbarConfig.searchDocumentsPath) {
//     writeFileSync(
//       `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
//       JSON.stringify(allCoreContent(sortPosts(allBlogs)))
//     );
//     console.log('Local search index generated...');
//   }
// }
//
// export const Blog = defineDocumentType(() => ({
//   name: 'Blog',
//   filePathPattern: 'blog/**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     date: { type: 'date', required: true },
//     tags: { type: 'list', of: { type: 'string' }, default: [] },
//     lastmod: { type: 'date' },
//     draft: { type: 'boolean' },
//     summary: { type: 'string' },
//     images: { type: 'json' },
//     authors: { type: 'list', of: { type: 'string' } },
//     layout: { type: 'string' },
//     bibliography: { type: 'string' },
//     canonicalUrl: { type: 'string' },
//   },
//   computedFields: {
//     ...computedFields,
//     structuredData: {
//       type: 'json',
//       resolve: (doc) => ({
//         '@context': 'https://schema.org',
//         '@type': 'BlogPosting',
//         headline: doc.title,
//         datePublished: doc.date,
//         dateModified: doc.lastmod || doc.date,
//         description: doc.summary,
//         image: doc.images ? doc.images[0] : siteMetadata.socialBanner,
//         url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
//       }),
//     },
//   },
// }));
//
// export const Authors = defineDocumentType(() => ({
//   name: 'Authors',
//   filePathPattern: 'authors/**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     name: { type: 'string', required: true },
//     avatar: { type: 'string' },
//     occupation: { type: 'string' },
//     company: { type: 'string' },
//     email: { type: 'string' },
//     twitter: { type: 'string' },
//     linkedin: { type: 'string' },
//     github: { type: 'string' },
//     layout: { type: 'string' },
//   },
//   computedFields,
// }));
//
// export default makeSource({
//   contentDirPath: 'data',
//   documentTypes: [Blog, Authors],
//   mdx: {
//     cwd: process.cwd(),
//     remarkPlugins: [remarkExtractFrontmatter, remarkGfm, remarkCodeTitles, remarkMath, remarkImgToJsx, remarkAlert],
//     rehypePlugins: [
//       rehypeSlug,
//       [
//         rehypeAutolinkHeadings,
//         {
//           behavior: 'prepend',
//           headingProperties: {
//             className: ['content-header'],
//           },
//           content: icon,
//         },
//       ],
//       rehypeKatex,
//       rehypeKatexNoTranslate,
//       [rehypeCitation, { path: path.join(root, 'data') }],
//       [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
//       rehypePresetMinify,
//     ],
//   },
//   onSuccess: async (importData) => {
//     const { allBlogs } = await importData();
//     createTagCount(allBlogs);
//     createSearchIndex(allBlogs);
//   },
// });

// import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer/source-files';
// import { writeFileSync } from 'fs';
// import readingTime from 'reading-time';
// import { slug } from 'github-slugger';
// import path from 'path';
// import { Plugin } from 'unified'; // ✅ Fix: Explicitly import Plugin
// import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
// // Remark & Rehype packages
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import { remarkAlert } from 'remark-github-blockquote-alert';
// import { remarkExtractFrontmatter, remarkCodeTitles, remarkImgToJsx, extractTocHeadings } from 'pliny/mdx-plugins';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeKatex from 'rehype-katex';
// import rehypeKatexNoTranslate from 'rehype-katex-notranslate';
// import rehypeCitation from 'rehype-citation';
// import rehypePrismPlus from 'rehype-prism-plus';
// import rehypePresetMinify from 'rehype-preset-minify';
// import siteMetadata from './data/siteMetadata';
// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
//
// // ✅ Fix: Ensure correct `cwd` handling for Windows
// const root = path.resolve(process.cwd());
//
// // ✅ Fix: Explicitly define plugins as `Plugin<any[], any>`
// const safeRemarkPlugins: Plugin<any[], any>[] = [
//   remarkExtractFrontmatter,
//   remarkGfm,
//   remarkCodeTitles,
//   remarkMath,
//   remarkImgToJsx,
//   remarkAlert,
// ];
//
// const safeRehypePlugins: Plugin<any[], any>[] = [
//   rehypeSlug,
//   [
//     rehypeAutolinkHeadings,
//     {
//       behavior: 'prepend',
//       headingProperties: {
//         className: ['content-header'],
//       },
//     },
//   ],
//   rehypeKatex,
//   rehypeKatexNoTranslate,
//   [rehypeCitation, { path: path.join(root, 'data') }],
//   [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
//   rehypePresetMinify,
// ];
//
// const computedFields: ComputedFields = {
//   readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
//   slug: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
//   },
//   path: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath,
//   },
//   filePath: {
//     type: 'string',
//     resolve: (doc) => doc._raw.sourceFilePath,
//   },
//   toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
// };
//
// export const Blog = defineDocumentType(() => ({
//   name: 'Blog',
//   filePathPattern: 'blog/**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     date: { type: 'date', required: true },
//     tags: { type: 'list', of: { type: 'string' }, default: [] },
//     draft: { type: 'boolean' },
//     summary: { type: 'string' },
//     images: { type: 'json' },
//     authors: { type: 'list', of: { type: 'string' } },
//     layout: { type: 'string' },
//     bibliography: { type: 'string' },
//     canonicalUrl: { type: 'string' },
//   },
//   computedFields,
// }));
//
// export const Authors = defineDocumentType(() => ({
//   name: 'Authors',
//   filePathPattern: 'authors/**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     name: { type: 'string', required: true },
//     avatar: { type: 'string' },
//     occupation: { type: 'string' },
//     company: { type: 'string' },
//     email: { type: 'string' },
//     twitter: { type: 'string' },
//     linkedin: { type: 'string' },
//     github: { type: 'string' },
//     layout: { type: 'string' },
//   },
//   computedFields,
// }));
//
// export default makeSource({
//   contentDirPath: 'data',
//   documentTypes: [Blog, Authors],
//   mdx: {
//     cwd: root, // ✅ Fix: Ensure correct `cwd`
//     remarkPlugins: safeRemarkPlugins, // ✅ Fix: Ensure proper typing for plugins
//     rehypePlugins: safeRehypePlugins, // ✅ Fix: Ensure proper typing for plugins
//   },
//   onSuccess: async (importData) => {
//     const { allBlogs } = await importData();
//     createTagCount(allBlogs);
//     createSearchIndex(allBlogs);
//   },
// });
//
// /**
//  * Count the occurrences of all tags across blog posts and write to json file
//  */
// function createTagCount(allBlogs: any[]) {
//   const tagCount: Record<string, number> = {};
//   allBlogs.forEach((file) => {
//     if (file.tags) {
//       file.tags.forEach((tag) => {
//         const formattedTag = slug(tag);
//         tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1;
//       });
//     }
//   });
//   writeFileSync('./app/tag-data.json', JSON.stringify(tagCount));
// }
//
// /**
//  * Create local search index for Kbar search
//  */
// function createSearchIndex(allBlogs: any[]) {
//   if (siteMetadata?.search?.provider === 'kbar' && siteMetadata.search.kbarConfig.searchDocumentsPath) {
//     writeFileSync(
//       `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
//       JSON.stringify(allCoreContent(sortPosts(allBlogs)))
//     );
//     console.log('Local search index generated...');
//   }
// }

import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files';
import { writeFileSync } from 'fs';
import readingTime from 'reading-time';
import { slug } from 'github-slugger';
import path from 'path';
import { Plugin } from 'unified';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
// Remark & Rehype packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { remarkAlert } from 'remark-github-blockquote-alert';
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings, { Options as AutolinkOptions } from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeKatexNoTranslate from 'rehype-katex-notranslate';
// @ts-ignore
import rehypeCitation, { Options as CitationOptions } from 'rehype-citation';
// @ts-ignore
import rehypePrismPlus, { Options as PrismOptions } from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import siteMetadata from './data/siteMetadata';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js';

// ✅ Fix: Ensure correct `cwd` handling for Windows
const root = path.resolve(process.cwd());

// ✅ Fix: Explicitly define plugin types
const safeRemarkPlugins: Plugin<[]>[] = [
  remarkExtractFrontmatter,
  remarkGfm,
  remarkCodeTitles,
  remarkMath,
  remarkImgToJsx,
  remarkAlert,
];

// @ts-ignore
// @ts-ignore
const safeRehypePlugins: Plugin<[]>[] = [
  rehypeSlug,
  // @ts-ignore
  [
    rehypeAutolinkHeadings as Plugin<[AutolinkOptions]>,
    { behavior: 'prepend', headingProperties: { className: ['content-header'] } },
  ],
  rehypeKatex,
  rehypeKatexNoTranslate,
  // @ts-ignore
  [rehypeCitation as Plugin<[CitationOptions]>, { path: path.join(root, 'data') }],
  // @ts-ignore
  [rehypePrismPlus as Plugin<[PrismOptions]>, { defaultLanguage: 'js', ignoreMissing: true }],
  // @ts-ignore
  rehypePresetMinify,
];

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'json' },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Authors],
  mdx: {
    // @ts-ignore
    remarkPlugins: safeRemarkPlugins,
    // @ts-ignore
    rehypePlugins: safeRehypePlugins,
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData();
    createTagCount(allBlogs);
    createSearchIndex(allBlogs);
  },
});

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
function createTagCount(allBlogs: Array<{ tags?: string[] }>) {
  const tagCount: Record<string, number> = {};
  allBlogs.forEach((file) => {
    if (file.tags) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag);
        tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1;
      });
    }
  });
  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount));
}

/**
 * Create local search index for Kbar search
 */
function createSearchIndex(allBlogs: unknown[]) {
  if (siteMetadata?.search?.provider === 'kbar' && siteMetadata.search.kbarConfig.searchDocumentsPath) {
    // @ts-ignore
    writeFileSync(
      `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
      // @ts-ignore
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    );
    console.log('Local search index generated...');
  }
}
