import React from 'react'

import Link from 'next/link'
import { NextSeo } from 'next-seo'

import About from '@/components/about'
import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Introduce from '@/components/introduce'
import PageTransition from '@/components/page-transition'

const MainPage: React.FC = () => (
    <>
        <NextSeo
            title={'Hi, Im Kairos - Front End Developer'}
            description={
                'Front-end developer with 3 years experience delivering responsive, user-focused web applicationsforglobal clients, Specialized in building modern interfaces using React, Next.js, Typescript, Javascript andTailwindCSS with a strong focus on clarity perfomance, and seamless user experience. Experience in translating client’s requiment to high-quality UI, and integrating FE applicationswithNode.js and Rest APIs, GraphQL. Experience in Web3 projects. Can manage client directly.'
            }
            openGraph={{
                images: [
                    {
                        height: 1333,
                        url: 'https://miksoft.pro/avatar.jpeg',
                        width: 1000
                    }
                ],
                locale: 'en-US',
                siteName: 'miksoft.pro'
            }}
        />

        <PageTransition>
            <Introduce />

            <About />

            <section className={'footerLinks'}>
                <Link
                    href={'/projects'}
                    title={'View my pet projects'}
                >
                    {'Projects'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default MainPage
