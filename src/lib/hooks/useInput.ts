import { useState } from 'react';

export interface InputTypes {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function useInput(defaultValue: string) {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
}
