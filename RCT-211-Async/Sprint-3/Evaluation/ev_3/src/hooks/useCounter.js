import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = (initial) => {
  const [value, setValue] = useState(initial.initialValue);
  const countValue = value || "";
  const incCount = (i) => {
    if (countValue + i <= initial.maxValue) {
      setValue((pre) => pre + i);
    }
    if(i === undefined){
        if (countValue + 1 <= initial.maxValue) {
            setValue((pre) => pre + 1);
          }
    }
  };
  const decCount = (i) => {
    if (countValue - i >= initial.minValue) {
      setValue((pre) => pre - i);
    }
    if(i === undefined){
        if (countValue - 1 <= initial.minValue) {
            setValue((pre) => pre - 1);
          }
    }
  };
  return {
    countValue,
    incCount,
    decCount,
  };
};
