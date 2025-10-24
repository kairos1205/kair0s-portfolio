import { Backend, CMS, DevOps, Frontend, SkillsType, Testing } from '@/data/skills'

export type RoleSkillsType = {
    area: string
    stack: SkillsType[]
}

export type ExperienceType = {
    period: string[]
    role: string
    duties: string
    skills?: RoleSkillsType[]
}

export const experience: ExperienceType[] = [
    {
        period: ['08/01/2024'],
        role: 'Freelancer',
        duties: 'Developed scalable, modular components for the client application using modern architectural patterns. Designed solutions for key functions such as client-server interactions, REST API integration, and service integrations. Implemented automatic UI tests (unit and integration) to enhance solution quality. Optimized application architecture, including authentication, logging, and data processing. Created and maintained a test environment with tools for screenshot testing and API simulation to streamline development. Contributed to code quality by implementing analysis tools, CI/CD processes, and conducting regular QA sessions. Collaborated with the UI/UX team to enhance UI components and improve application usability.',
        skills: [
            // {
            //     area: 'Frontend',
            //     stack: [
            //         Frontend.JavaScript,
            //         Frontend.TypeScript,
            //         Frontend.React,
            //         Frontend.Redux,
            //         Frontend.SASS,
            //         Frontend.TailwindCSS,
            //         Frontend.Storybook
            //     ]
            // },
            // {
            //     area: 'Backend',
            //     stack: [Backend.RestAPI, Backend.Go, Backend.PostgreSQL]
            // },
            // {
            //     area: 'Testing',
            //     stack: [Testing.Playwright, Testing.Jest, Testing.RTL]
            // },
            // {
            //     area: 'CI/CD & DevOps',
            //     stack: [
            //         DevOps.Docker,
            //         DevOps.Git,
            //         DevOps.Jenkins,
            //         DevOps.SonarQube,
            //         DevOps.Linux,
            //         DevOps.CentsOS,
            //         DevOps.GitHubActions
            //     ]
            // }
        ]
    },
    {
        period: ['01/01/2022', '04/01/2024'],
        role: 'Front End Developer',
        duties: 'Led the full development cycle of WordPress sites for media organizations, creating scalable solutions for high-traffic demands. Designed custom PHP modules, optimized MySQL databases, and implemented performance enhancements to ensure reliability. Managed VPS setup, security measures, and ongoing maintenance to safeguard hosting environments. Provided technical support, developed SEO strategies, and integrated social media modules for streamlined content distribution. Additionally, I designed user-friendly WordPress themes, enhancing both functionality and user experience.',
        skills: [
            // {
            //     area: 'Frontend',
            //     stack: [Frontend.JavaScript, Frontend.jQuery, Frontend.TypeScript, Frontend.HTML, Frontend.CSS]
            // },
            // {
            //     area: 'Backend',
            //     stack: [Backend.PHP, Backend.MySQL]
            // },
            // {
            //     area: 'CI/CD & DevOps',
            //     stack: [DevOps.Linux]
            // },
            // {
            //     area: 'CMS',
            //     stack: [CMS.WordPress]
            // }
        ]
    }
]
