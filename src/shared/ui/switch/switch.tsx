import { FC, useId, useState } from 'react';
import { Circle, Input, Label } from './switch.styles';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({ checked = false, onChange }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    onChange && onChange(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Input type='checkbox' id={id} checked={isChecked} onChange={handleOnChange} />
      <Label htmlFor={id}>
        <Circle />
      </Label>
    </>
  );
};
