import type { NextPage } from "next";
import MetaData from "@components/reusable/MetaData";
import HomePage from "@components/WelcomePage";
import Auth from "@components/reusable/Auth";
// import styles from '@styles/Home.module.css'

const Home: NextPage = () => (
  <>
    <MetaData title="Amaze Shop" />
    <HomePage />
  </>
);

export default Home;
