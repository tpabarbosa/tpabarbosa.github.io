import { useCallback, useState } from "react";

export type UseToggler = [boolean, () => void];

export const useToggler = (initialValue: boolean = false): UseToggler => {
  const [value, setValue] = useState(initialValue);

  const toggler = useCallback(() => setValue((prev) => !prev), []);

  return [value, toggler];
};
