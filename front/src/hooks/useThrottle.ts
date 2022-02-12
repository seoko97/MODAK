import { useCallback, useState } from "react";

type ICallback = any;

const useThrottle = (callback: ICallback, limit = 100) => {
  const [waiting, setWaiting] = useState<boolean>(false);

  const onThrottle = useCallback(
    (...data) => {
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
