import React from 'react'
import useRouter, { SingletonRouter } from 'next/router'
import Text from '@reusable/Typography'
import Button, { TypeButton, TypeButtonSize } from '@reusable/Button'
import styles from '@styles/HomePage.module.scss'

const HomePage: React.FunctionComponent = () => {
  const router: SingletonRouter = useRouter
  return (
    <>
      <div className={styles.homePage}>
        <Text>Welcome to Amaze Shop</Text>
        <div className={styles.buttonContainer}>
          <Button
            btnType={TypeButton.PRIMARY}
            label="Login"
            size={TypeButtonSize.MEDIUM}
            onClick={() => router.push('/login')}
          />
          <Button
            btnType={TypeButton.SECONDARY}
            label="Register"
            size={TypeButtonSize.MEDIUM}
            onClick={() => console.log('clicked....')}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage;
