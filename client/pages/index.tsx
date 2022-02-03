import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Text, { TextVariant } from '@components/reusable/Typography';
import Button, {
  TypeButton,
  TypeButtonSize,
  TypeTextColor,
} from '@components/reusable/Button';
import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Text variant={TextVariant.heading1} color="primary">
        Home Page
      </Text>
      <Button
        btnType={TypeButton.PRIMARY_SUCCESS}
        onClick={() => console.log('clicked')}
        label="Click Me"
        disable={false}
        size={TypeButtonSize.LARGE}
      />
    </div>
  );
};

export default Home;
