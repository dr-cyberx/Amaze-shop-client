import type { NextPage } from 'next'
import Text, { TextVariant } from '@components/reusable/Typography'
import Button, { TypeButton, TypeButtonSize } from '@components/reusable/Button'
import Input from '@resusable/Input'
// import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Text variant={TextVariant.heading1} color="primary">
        Home Page
      </Text>
      <br />
      <Input
        name="email"
        value="hello"
        onChange={(e) => console.log(e.target.value)}
      />
      <br />
      <Button
        btnType={TypeButton.PRIMARY_SUCCESS}
        onClick={() => console.log('clicked')}
        label="Click Me"
        disable={false}
        size={TypeButtonSize.LARGE}
      />
    </div>
  )
}

export default Home
