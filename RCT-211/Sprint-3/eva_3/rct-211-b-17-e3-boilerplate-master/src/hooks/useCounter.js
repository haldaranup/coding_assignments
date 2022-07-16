import { useState } from "react";

export const useCounter = (init) => {
  const [value, setValue] = useState(init.initialValue);

  const count = value;

  const incCount = (i) => {
    if (count + i <= init.maxValue) {
      setValue((pre) => pre + i);
    }
    if(i === undefined){
        if (count + 1 <= init.maxValue) {
            setValue((pre) => pre + 1);
          }
    }
  };
  const decCount = (i) => {
    if (count - i >= init.minValue) {
      setValue((pre) => pre - i);
    }
    if(i === undefined){
        if (count - 1 <= init.minValue) {
            setValue((pre) => pre - 1);
          }
    }
  };

  return { count, incCount, decCount };
};

