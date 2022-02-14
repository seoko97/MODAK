import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(10000);

  useEffect(() => {
    function onScroll() {
      setScrollHeight(window.pageYOffset + document.documentElement.clientHeight);
      setClientHeight(document.documentElement.scrollHeight);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return [scrollHeight, clientHeight];
};

export default useScroll;
