import React from 'react';
import Switch from 'react-switch';
import Text, { TextVariant } from '@reusable/Typography';
import styles from '@styles/checkbox.module.scss';

interface iCheckbox {
  label?: string;
  setState?: React.SetStateAction<any>;
  state?: any;
}

const Checkbox: React.FunctionComponent<iCheckbox> = ({
  label,
  setState,
  state,
}) => {
  return (
    <div className={styles.checkbox_container}>
      <Text variant={TextVariant.heading5} style={{ marginRight: '15px' }}>
        {label}
      </Text>
      <Switch
        onChange={(checked: boolean) => setState(checked)}
        checked={state}
        name="role"
      />
    </div>
  );
};

Checkbox.defaultProps = {
  label: 'This is checkbox',
  state: true,
};

export default Checkbox;
