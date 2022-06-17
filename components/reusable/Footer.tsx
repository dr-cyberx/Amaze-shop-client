import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "@styles/Footer.module.scss";
import Text, { TextVariant } from "./Typography";

const icons: {
  id: number;
  icon: JSX.Element;
}[] = [
  {
    id: 0,
    icon: <FacebookIcon />,
  },
  {
    id: 1,
    icon: <InstagramIcon />,
  },
  {
    id: 2,
    icon: <YouTubeIcon />,
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    icon: <TwitterIcon />,
  },
];

const footer_links: string[][] = [
  [
    "About Us",
    "Careers",
    "Press Releases",
    "Amaze Cares",
    "Gift a Smile",
    "Amaze Science",
  ],
  [
    "COVID-19 and Amaze",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Amaze App Download",
    "Amaze Assistant Download",
    "Help",
  ],
  [
    "Sell on Amaze",
    "Sell under Amaze Accelerator",
    "Amaze Global Selling",
    "Become an Affiliate",
    "Fulfilment by Amaze",
    "Advertise Your Products",
    "Amaze Pay on Merchants",
  ],
];

const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.thanks_box}>
        <div className={styles.social_media_links}>
          <ul className={styles.social_media_icon_links}>
            {icons.map((d: { id: number; icon: JSX.Element }) => (
              <li key={d.id}>{d.icon}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.links_section}>
        {footer_links.map((item: string[], index) => (
          <div className={styles[`section_${index}`]} key={index}>
            {item.map((d: string) => (
              <>
                <a href="#">{d}</a>
              </>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.horizontal__bottom__line} />
      <div className={styles.copyright_container}>
        <Text variant={TextVariant.heading5}>
          © 2022 Copyright: amazeshop.com
        </Text>
      </div>
    </div>
  );
};

export default Footer;
