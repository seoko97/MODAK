import React, { memo, useCallback, useState } from "react";
import Style from "./Style";

interface Props {
  tabs: string[];
  children: React.ReactNode[];
}

export const TabItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const Tabs = ({ tabs, children }: Props) => {
  const [current, setCurrent] = useState(tabs[0]);
  const idx = tabs.findIndex((tab) => current === tab);

  const handleClick = useCallback(async (e) => {
    setCurrent(e.target.innerText);
  }, []);

  return (
    <>
      <Style.Container role="tablist">
        {tabs.map((tab, idx) => {
          return (
            <Style.EachTab key={idx} role="tab" active={current === tab} onClick={handleClick}>
              {tab}
            </Style.EachTab>
          );
        })}
      </Style.Container>
      {children[idx]}
    </>
  );
};

export default memo(Tabs);
