import React, { FunctionComponent, memo, CSSProperties } from "react";
import { useController } from "react-hook-form";
import classnames from "classnames";
import Text, { TextVariant } from "@reusable/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/Input.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export enum TypeInput {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface iInput {
  placeholder?: string;
  inputType?: "text" | "number" | "password" | "email" | "tel";
  type?: TypeInput;
  disabled?: boolean;
  name: string;
  positionIcon?: "left" | "right";
  error?: boolean;
  label?: string;
  style?: CSSProperties;
  control?: any;
  inputvalue?: any;
  rules: any;
  iconLeft?: IconProp;
  labelSize?: TextVariant;
}

const Input: FunctionComponent<iInput> = ({
  placeholder,
  inputType,
  type,
  disabled,
  name,
  positionIcon,
  error,
  label,
  style,
  control,
  inputvalue,
  rules,
  iconLeft,
  labelSize,
}): JSX.Element => {
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      <div
        className={classnames({
          [styles[`input_wrapper`]]: true,
          [styles[`input_wrapper_disable`]]: disabled,
        })}
      >
        {iconLeft && (
          <div className={styles.input_front_icon}>
            <FontAwesomeIcon
              icon={iconLeft}
              size={"lg"}
              style={{ marginRight: "6px" }}
            />
          </div>
        )}
        {label && (
          <Text
            variant={
              labelSize
                ? labelSize
                : type === TypeInput.SMALL
                ? TextVariant.heading5
                : type === TypeInput.MEDIUM
                ? TextVariant.heading5
                : type === TypeInput.LARGE
                ? TextVariant.heading3
                : TextVariant.heading5
            }
          >
            {label}
          </Text>
        )}
        <input
          style={{
            marginTop: label && "7px",
            paddingLeft: iconLeft ? "40px" : "inherit",
            ...style,
          }}
          placeholder={placeholder}
          value={inputvalue ? inputvalue : value}
          onChange={onChange}
          type={inputType}
          autoComplete="false"
          className={classnames({
            [styles[`input_wrapper__input`]]: true,
            [styles[`input_wrapper__input__${type}`]]: true,
            [styles[`input_wrapper__input__icon__${positionIcon}`]]:
              positionIcon,
            [styles[`input_wrapper__input__error__${error}`]]:
              (fieldState && fieldState.invalid) || error,
          })}
        />
      </div>
      {fieldState && fieldState.invalid && (
        <span className={styles.errorMessage}>{`${label} is required !`}</span>
      )}
    </>
  );
};

Input.defaultProps = {
  placeholder: "",
  inputType: "text",
  type: TypeInput.MEDIUM,
  disabled: false,
  name: "",
  positionIcon: "left",
  error: false,
  // label: 'Email',
  // iconLeft: null,
};

export default memo(Input);
