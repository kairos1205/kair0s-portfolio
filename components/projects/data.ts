/* eslint-disable simple-import-sort/imports */
import { StaticImageData } from 'next/image'

import wework from './images/wework.jpg'
import chainpro from './images/chainpro.jpg'
import techspecs from './images/techspecs.jpg'
import armoredkingdom from './images/armoredkingdom.jpg'

type ProjectType = {
    link: string
    title: string
    image: StaticImageData
    description?: string
}

export const data: ProjectType[] = [
    {
        image: techspecs,
        title: 'TechSpecs',
        link: 'https://techspecs.io/',
        description:
            'TechSpecs is an API-first platform that provides standardized, up-to-date technical specifications for consumer electronics products (smartphones, tablets, laptops, smartwatches, etc.). Developers and businesses can access product search, detail, brand, category endpoints via RESTful APIs to integrate specs into apps, comparisons, or eCommerce solutions.'
    },
    {
        image: chainpro,
        title: 'ChainPro',
        link: 'https://chainpro.xyz/',
        description:
            'ChainPro is a secure, non-custodial, hedge fund-grade on-chain trading terminal built on Trusted Execution Environments, delivering real-time data, advanced order types, and pro-trading features across Solana, Base, Ethereum Mainnet, Hyperliquid, BNB, Abstract, and Arbitrum, and available on both web and mobile.'
    },
    {
        image: armoredkingdom,
        title: 'Armored Kingdom',
        link: 'https://armoredkingdom.com/',
        description: 'Armored Kingdom is NFT near drop website. It was built on Near Blockchain.'
    },
    {
        image: wework,
        title: 'We Work',
        link: 'https://wework.co.jp/',
        description:
            'WeWork Japan is the Japan arm of the global coworking and flexible office provider WeWork. The website showcases their flexible workspace solutions across Japan, including private offices, coworking spaces, dedicated desks, and enterprise-level custom workspace planning.'
    }
]
