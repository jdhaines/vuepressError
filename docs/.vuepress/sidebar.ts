import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/about/': [
    {
      text: 'About Our Team',
      children: [
        {
          text: 'About Us',
          link: '/about/aboutUs.html',
        },
        {
          text: 'Strategy',
          link: '/about/strategy.html',
        },
        {
          text: 'OKRs',
          link: '/about/okrs.html',
        },
        {
          text: 'Core Team',
          link: '/about/core.html',
        },
        {
          text: 'Finances',
          link: '/about/finances.html',
        },
        '/about/members.html',
        {
          text: 'Contact Us',
          link: '/about/contact.html',
        },
      ],
    },
    {
      text: 'How We Work',
      children: [
        {
          text: 'Software Pillars',
          link: '/about/pillars.html',
        },
        {
          text: 'DoD Gap Analysis',
          link: '/about/gapAnalysis.html',
        },
        {
          text: 'Tools',
          link: '/about/tools.html',
        },
        {
          text: 'Skills',
          link: '/about/skills.html',
        },
        {
          text: 'Ethos',
          link: '/about/ethos.html',
        },
        {
          text: 'Sprints',
          link: '/about/sprints.html',
        },
      ],
    },
    {
      text: 'Legacy',
      link: '/about/legacy/',
      children: [
        {
          text: 'Catalyst',
          link: '/about/legacy/catalyst.html',
        },
      ],
    },
  ],
  '/news/': [
    {
      text: 'Blog',
      link: '/blog',
    },
    {
      text: 'Router Newsletters',
      children: [
        {
          text: 'Q2-2022',
          link: '/news/Q2_2022.html',
        },
        {
          text: 'Q1-2022',
          link: '/news/Q1_2022.html',
        },
        {
          text: 'Q4-2021',
          link: '/news/Q4_2021.html',
        },
        {
          text: 'Q3-2021',
          link: '/news/Q3_2021.html',
        },
        {
          text: 'Q2-2021',
          link: '/news/Q2_2021.html',
        },
        {
          text: 'Q1-2021',
          link: '/news/Q1_2021.html',
        },
        {
          text: 'Q4-2020',
          link: '/news/Q4_2020.html',
        },
        {
          text: 'Q3-2020',
          link: '/news/Q3_2020.html',
        },
        {
          text: 'Q4-2019',
          link: '/news/Q4_2019.html',
        },
      ],
    },
    {
      text: 'Sprinter Newsletters',
      children: [
        {
          text: 'August 2022',
          link: '/news/august22.html',
        },
        {
          text: 'July 2022',
          link: '/news/july22.html',
        },
        {
          text: 'June 2022',
          link: '/news/june22.html',
        },
        {
          text: 'May 2022',
          link: '/news/may22.html',
        },
      ],
    },
  ],
  '/handbook/': [
    {
      text: 'Home',
      link: '/handbook/intro.html',
    },
    {
      text: 'Policies',
      link: '/handbook/policies/',
      collapsible: true,
      children: [
        {
          text: 'Automation',
          link: '/handbook/policies/automation.html',
        },
        {
          text: 'Architecture',
          link: '/handbook/policies/architecture.html',
        },
        {
          text: 'Data',
          link: '/handbook/policies/data.html',
        },
        {
          text: 'Open Source',
          link: '/handbook/policies/openSource.html',
        },
        {
          text: 'Secrets',
          link: '/handbook/policies/secrets.html',
        },
        {
          text: 'Security',
          link: '/handbook/policies/security.html',
        },
        {
          text: 'Self-Hosted Runners',
          link: '/handbook/policies/selfHostedRunners.html',
        },
        {
          text: 'Source Code',
          link: '/handbook/policies/sourceCode.html',
        },
      ],
    },
    {
      text: 'Governance',
      link: '/handbook/governance/',
      collapsible: true,
      children: [
        {
          text: 'Branding',
          link: '/handbook/governance/branding.html',
        },
        {
          text: 'Export Control',
          link: '/handbook/governance/exportControl.html',
        },
        {
          text: 'Innersource',
          link: '/handbook/governance/innersource.html',
        },
        {
          text: 'Intellectual Property',
          link: '/handbook/governance/ip.html',
        },
        {
          text: 'Security',
          link: '/handbook/governance/security.html',
        },
        {
          text: 'Taxation',
          link: '/handbook/governance/taxation.html',
        },
      ],
    },
  ],
  '/learn/': [
    {
      text: 'Onboarding',
      children: [
        {
          text: 'Modern Style',
          link: '/learn/onboarding.html',
        },
        {
          text: 'On-Prem (Legacy Style)',
          children: [
            '/learn/getStarted/newUser.html',
            '/learn/getStarted/localEnvironment.html',
            '/learn/getStarted/firstContribution.html',
            '/learn/getStarted/configMgmt.html',
            '/learn/getStarted/learningCode.html',
          ],
        },
      ],
    },
    {
      text: 'Dig. Engineering Academy',
      children: ['/learn/devsecopsShort.html'],
    },
    {
      text: 'Training Modules',
      children: [
        {
          text: 'DevOps 4 Dummies',
          children: [
            '/learn/devops4dummies/overview.html',
            '/learn/devops4dummies/development.html',
            '/learn/devops4dummies/operations.html',
            '/learn/devops4dummies/devOps.html',
            '/learn/devops4dummies/devSecOps.html',
            '/learn/devops4dummies/otherTopics.html',
            '/learn/devops4dummies/currentIssues.html',
            '/learn/devops4dummies/whatNext.html',
            '/learn/devops4dummies/definitions.html',
          ],
        },
        { text: 'GraphQL', link: '/learn/graphqlTraining.html' },
        { text: 'SQL Basics', link: '/learn/sqlBasics.html' },
      ],
    },
    {
      text: 'Misc',
      children: [
        {
          text: 'Book Club',
          link: '/learn/bookclub.html',
        },
        {
          text: 'Reference',
          link: '/learn/reference.html',
        },
        {
          text: 'App Docs',
          children: [
            {
              text: 'Cat',
              link: '/learn/appdocs/cat.html',
            },
            {
              text: 'GSET',
              link: '/learn/appdocs/gset.html',
            },
            {
              text: 'MVA',
              link: '/learn/appdocs/mva.html',
            },
          ],
        },
      ],
    },
  ],
  '/aiml': [
    {
      text: 'Learn',
      children: [
        {
          text: 'Intro To ML',
          link: '/aiml/intro2ml.html',
        },
        {
          text: 'Practical ML',
          link: '/aiml/practicalml.html',
        },
      ],
    },
    {
      text: 'Case Studies',
      children: [
        {
          text: 'Case Study 1',
          link: '/aiml/caseStudy1.html',
        },
        {
          text: 'Case Study 2',
          link: '/aiml/caseStudy2.html',
        },
      ],
    },
  ],
  '/dodgap/': [
    {
      text: '',
      children: [
        '/dodgap/landing.html',
        '/dodgap/tools.html',
        '/dodgap/activities.html',
      ],
    },
  ],
  '/egap/': [
    {
      text: '',
      children: [
        '/egap/landing.html',
        '/egap/eDigitalEngineering.html',
        '/egap/eAgileSoftware.html',
        '/egap/eOpenSystemsArchitecture.html',
      ],
    },
  ],
  '/azure/': [
    {
      text: 'Azure',
      children: ['/azure/azure.html'],
    },
  ],
  // "/learn/": "auto", //first to match gets picked, so this has to be after the more specific one above
  // "/reference/": "auto",
  '/transformation/': [
    {
      text: 'Working Groups',
      children: ['/transformation/dcworkinggroup.html'],
    },
    {
      text: 'Projects',
      children: ['/transformation/lighthouse.html'],
    },
    {
      text: 'Misc',
      children: ['/transformation/bookclub.html'],
    },
  ],
  '/manifestos/': [
    {
      text: 'Big Data',
      children: [
        '/manifestos/bigdata_1.html',
        '/manifestos/bigdata_2.html',
        '/manifestos/bigdata_3.html',
        '/manifestos/bigdata_4.html',
      ],
    },
    {
      text: 'DevSecOps',
      children: [
        '/manifestos/devsecops_1.html',
        '/manifestos/devsecops_2.html',
        '/manifestos/devsecops_3.html',
        '/manifestos/devsecops_4.html',
      ],
    },
    {
      text: 'MBE',
      children: [
        '/manifestos/mbe_1.html',
        '/manifestos/mbe_2.html',
        '/manifestos/mbe_3.html',
        '/manifestos/mbe_4.html',
      ],
    },
  ],

  // "/appdocs/": "auto",
  // "/blog/": "auto",
  // "/misc/": "auto",
  // "/aiml/": "auto",
  // "/unused/": "auto",
  // "/": [""],
}
