import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import 'tailwindcss'
import { defaultTheme } from '@vuepress/theme-default'
// @ts-ignore
import markdownItFootnote from 'markdown-it-footnote'
// @ts-ignore
import markdownItTaskList from 'markdown-it-task-lists'
// @ts-ignore
import markdownItMathJax3 from 'markdown-it-mathjax3'
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search'
import mdEnhance from 'vuepress-plugin-md-enhance'
import { blogPlugin } from 'vuepress-plugin-blog2'
import { navbar } from './navbar'
import { sidebar } from './sidebar'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path, getDirname } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  base: '/',
  title: 'ErrorDemo',
  head: [['link', { rel: 'stylesheet', href: '/dist/tailwind.css' }]],
  markdown: {
    toc: {
      level: [2],
    },
  },
  bundler: viteBundler({
    viteOptions: {
      plugins: [],
      css: {
        postcss: {
          plugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
        },
      },
    },
    vuePluginOptions: {},
  }),
  // bundler: webpackBundler({
  //   postcss: {
  //     postcssOptions: {
  //       plugins: ['tailwindcss', 'autoprefixer'],
  //     },
  //   },
  //   // vue: {},
  //   sass: {},
  //   scss: {},
  //   evergreen: true,
  // }),
  extendsMarkdown: md => {
    md.use(markdownItFootnote)
    md.use(markdownItTaskList)
    md.use(markdownItMathJax3)
  },
  theme: defaultTheme({
    repo: '',
    docsDir: 'docs',
    docsBranch: 'main',
    repoLabel: 'GitHub',
    logo: '',
    logoDark: '',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated: ',
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 1,
    editLinkText: 'Edit this page on GitHub',
    docsRepo: '',
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search...',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    mdEnhance({
      mermaid: true,
    }),
    blogPlugin({
      // only files under articles are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('articles/') : false,

      // getting article info
      getInfo: ({ frontmatter, title }) => ({
        title,
        snippet: frontmatter.snippet,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
      }),
      category: [
        {
          key: 'category',
          getter: page => <string[]>page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({ title: 'Categories', sidebar: false }),
          itemFrontmatter: name => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: page => <string[]>page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({ title: 'Tags', sidebar: false }),
          itemFrontmatter: name => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],
      type: [
        {
          key: 'blog',
          // remove archive articles
          filter: page => !page.frontmatter.archive,
          path: '/blog/',
          layout: 'Blog',
          frontmatter: () => ({ title: 'Blog', sidebar: false }),
          // sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return (
                (pageB.frontmatter.sticky as number) -
                (pageA.frontmatter.sticky as number)
              )

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1
            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // only article with date should be added to timeline
          filter: page => page.frontmatter.date instanceof Date,
          // sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date as Date).getTime() -
            new Date(pageA.frontmatter.date as Date).getTime(),
          path: '/timeline/',
          layout: 'Timeline',
          frontmatter: () => ({ title: 'Timeline' }),
        },
      ],
      hotReload: true,
    }),
  ],
})
