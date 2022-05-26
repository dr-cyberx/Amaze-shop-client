import React, { useContext, useState } from "react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Text, { TextVariant } from "@reusable/Typography";
import Searchbar, { SearchbarType } from "./Searchbar";
import {
  IprofileDropdownOption,
  profileDropdownOptions,
} from "utils/profileDropdownOptions";
import { CartContext } from "@context/Cart/CartContext";
import styles from "@styles/reusable/Navbar.module.scss";
import useLocalStorage from "hooks/useLocalStorage";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { state, openPostModal, closePostModal } = useContext(CartContext);
  const [searchbarVal, setSearchbarVal] = useState<string>("");
  const [dropdownArrow, setDropdownArrow] = useState<boolean>(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setSearchbarVal(e.target.value);
  };

  const handleLinkOnClick = (item: IprofileDropdownOption): void => {
    if (item.path == "/logout") {
      useLocalStorage.clear();
      router.push("/login");
    } else {
      router.push(item.path);
    }
  };

  const showImage = (Imagepath: string): JSX.Element => {
    return (
      <Image
        // src={`/userAvatars/${state?.userDetail?.profileImage}.png`}
        src={Imagepath}
        alt="userIcon"
        height={35}
        width={35}
      />
    );
  };

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar}>
        <div
          className={styles.logo__container}
          onClick={() => router.push("/home")}
        >
          <Image src={"/logo-png-min.png"} alt="logo" height={50} width={165} />
        </div>
        <div className={styles.searchbar__container}>
          <Searchbar
            onChange={handleSearchInput}
            value={searchbarVal}
            type={SearchbarType.MEDIUM}
            inputType={undefined}
            placeholder={"Searching for..."}
            label="Search"
          />
        </div>
        <div className={styles.other__navItems}>
          <div className={styles.cart__Count}>
            <IconButton
              aria-label="cart"
              onClick={(event: any) => {
                event.stopPropagation();
                state.showCartModal ? closePostModal() : openPostModal();
              }}
            >
              <StyledBadge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div
            className={styles.other_nav_links}
            onClick={() => setDropdownArrow(!dropdownArrow)}
          >
            <div style={{ overflow: "hidden", borderRadius: "50px" }}>
              {state.userDetail.profileImage
                ? showImage(
                    `/userAvatars/${state?.userDetail?.profileImage}.png`
                  )
                : showImage(`/userAvatars/${9}.png`)}
            </div>
            {dropdownArrow ? (
              <FontAwesomeIcon icon={faAngleUp} style={{ marginLeft: "6px" }} />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ marginLeft: "6px" }}
              />
            )}
          </div>
        </div>
      </div>
      <ul
        className={styles.profile__dropdown}
        style={
          dropdownArrow
            ? { height: "210px" }
            : { height: "0px", border: "none" }
        }
        onMouseLeave={() => setDropdownArrow(false)}
      >
        {profileDropdownOptions.map((item: IprofileDropdownOption) => (
          <li
            key={item.label}
            onClick={() => handleLinkOnClick(item)}
            className={styles.profileDropdown__listItem}
          >
            <Text
              variant={TextVariant.heading6}
              style={{ fontWeight: "600", letterSpacing: "1px" }}
            >
              {item.label}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
