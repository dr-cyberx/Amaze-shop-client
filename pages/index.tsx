import type { NextPage } from 'next'
import MetaData from '@components/reusable/MetaData'
import HomePage from '@components/WelcomePage'
// import styles from '@styles/Home.module.css'

const Home: NextPage = () => (
  <>
    <MetaData title="Amaze Shop" />
    <HomePage />
  </>
)

export default Home
