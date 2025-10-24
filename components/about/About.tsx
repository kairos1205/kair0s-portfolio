import React from 'react'

import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => (
    <section className={styles.aboutSection}>
        <h2 className={'pageTitle'}>{'About me'}</h2>
        <div className={styles.aboutContainer}>
            {/* <Image
                src={photo}
                alt={'Photo of me'}
            /> */}
            <div>
                <p>
                    {
                        'Front-end developer with 3 years experience delivering responsive, user-focused web applicationsforglobal clients, Specialized in building modern interfaces using React, Next.js, Typescript, Javascript andTailwindCSS with a strong focus on clarity perfomance, and seamless user experience.'
                    }
                </p>
                <p>
                    {
                        'Experience in translating client’s requiment to high-quality UI, and integrating FE applicationswithNode.js and Rest APIs, GraphQL. Experience in Web3 projects. Can manage client directly.'
                    }
                </p>
            </div>
        </div>
    </section>
)

export default About
