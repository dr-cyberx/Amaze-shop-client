import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Text, { TextVariant } from '@components/reusable/Typography'
import Button from '@components/reusable/Button'
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Text variant={TextVariant.h1} color='primary'>Home Page</Text>
      <Button />
    </div>
  )
}

export default Home
