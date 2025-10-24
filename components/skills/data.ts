/* eslint-disable prettier/prettier */
type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Frontend',
        skills: [
            {
                name: 'TypeScript',
                level: 90
            },
            {
                name: 'React, Next.js',
                level: 90
            },
            {
                name: 'TailwindCSS',
                level: 90
            },
            {
                name: 'ESLint & Prettier',
                level: 85
            }
        ]
    },
    {
        group: 'Backend',
        skills: [
            {
                name: 'Node.js',
                level: 90
            },
            {
                name: 'PHP',
                level: 60
            },
            {
                name: 'Python',
                level: 80
            },
            {
                name: 'MongoDB',
                level: 60
            }
        ]
    },
    {
        group: 'Web3',
        skills: [
            {
                name: 'SolanaWeb3',
                level: 70
            },
            {
                name: 'Ethers.js',
                level: 80
            },
            {
                name: 'Solidity',
                level: 50
            }
        ]
    },
    {
        group: 'DevOps',
        skills: [
            {
                name: 'Docker',
                level: 60
            },
            {
                name: 'Git',
                level: 90
            },
            {
                name: 'Linux',
                level: 85
            }
        ]
    }
]
