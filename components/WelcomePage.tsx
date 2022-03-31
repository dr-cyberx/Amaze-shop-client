import React, { memo } from 'react';
import useRouter, { SingletonRouter } from 'next/router';
import Text from '@reusable/Typography';
import Button, { TypeButton, TypeButtonSize } from '@reusable/Button';
import styles from '@styles/HomePage.module.scss';

type IHomePageLinks = {
  btnType: TypeButton;
  label: string;
  size: TypeButtonSize;
  destination: string;
};

const homePageLinks: Array<IHomePageLinks> = [
  {
    btnType: TypeButton.PRIMARY,
    label: 'Login',
    size: TypeButtonSize.MEDIUM,
    destination: '/login',
  },
  {
    btnType: TypeButton.SECONDARY,
    label: 'Register',
    size: TypeButtonSize.MEDIUM,
    destination: '/register',
  },
];

const HomePage: React.FunctionComponent = (): JSX.Element => {
  const router: SingletonRouter = useRouter;
  return (
    <>
      <div className={styles.homePage}>
        <Text>Welcome to Amaze Shop</Text>
        <div className={styles.buttonContainer}>
          {homePageLinks.map((singleLink: IHomePageLinks) => (
            <div key={singleLink.label} className={styles.singleBtnContainer}>
              <Button
                btnType={singleLink.btnType}
                label={singleLink.label}
                size={singleLink.size}
                onClick={() => router.push(singleLink.destination)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
