import { useCallback, useState } from "react";

type ICallback = (...arg: any) => void;

const useDebounce = (callback: ICallback, limit = 100) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const onDebounce = useCallback(
    (...arg) => {
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        callback(...arg);
      }, limit);
      setTimer(newTimer);
    },
    [timer],
  );

  return onDebounce;
};

export default useDebounce;
