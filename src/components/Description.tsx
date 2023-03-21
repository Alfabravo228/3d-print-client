import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Description.module.scss'

const inter = Inter({ subsets: ['latin'] })

interface DescriptionProps {

}

const Description: React.FC<DescriptionProps> = () => {
  return (
    <div>

      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            3д-друкування<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            3д-моделювання <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
      </div>
    </div >
  );
};

export default Description