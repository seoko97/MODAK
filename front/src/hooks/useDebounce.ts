import { useCallback, useState } from "react";

type ICallback<T> = (...arg: T[]) => void;

const useDebounce = <T>(callback: ICallback<T>, limit = 100) => {
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
