import { useCallback, useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setter] = useState<string>(initialValue);
  const handler = useCallback((e) => {
    setter(e.terget.valut);
  }, []);
  return [value, handler, setter];
};

export default useInput;
