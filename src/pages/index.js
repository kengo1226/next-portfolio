import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "../../components/layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout Home>
      <div className={styles.heroContainer}>
        <Image src="/images/hero_bg.jpg" width={1920} height={650} />
        <div className={styles.heroText}>
          <h2>CREATIVE<br />UX/UI DESIGNER<br />in JAPAN</h2>
          <p>this is sample text here...</p>
          <button><a href="#">Contact Me</a></button>
        </div>
      </div>

      <div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutMe}>
            <p>Currently I'm working as a front-end developer in Tokyo.Currently I'm working as a front-end developer in Tokyo.Currently I'm working as a front-end developer in Tokyo.</p>
          </div>
          <div className={styles.aboutSkill}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Wordpress</li>
              <li>GIT</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
