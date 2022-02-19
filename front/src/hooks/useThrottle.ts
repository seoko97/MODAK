import { useCallback, useState } from "react";

type ICallback<T> = (...arg: T[]) => void;

const useThrottle = <T>(callback: ICallback<T>, limit = 100) => {
  const [waiting, setWaiting] = useState<boolean>(false);

  const onThrottle = useCallback(
    async (...data) => {
      if (!waiting) {
        callback(...data);
        setWaiting(true);
        setTimeout(() => setWaiting(false), limit);
      }
    },
    [waiting],
  );

  return onThrottle;
};

export default useThrottle;
