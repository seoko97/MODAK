import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
}

// NOTE: 스타일 변환 확인 겸 테스트용
const StyledCheckbox = ({ items }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
    console.log(checkedItems);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      box.classList.add("isChecked");
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      box.classList.remove("isChecked");
    }
    return checkedItems;
  };

  return (
    <FilterItemContainer>
      {items.map((item) => (
        <CheckboxWrapper key={item}>
          <input type="checkbox" value={item} onChange={(e) => checkHandler(e)} />
          <p>{item}</p>
        </CheckboxWrapper>
      ))}
    </FilterItemContainer>
  );
};

// const StyledCheckbox = ({ items }: Props) => {
//   console.log(items);

//   return (
//     <FilterItemContainer>
//       {items.map((item) => (
//         <CheckboxWrapper key={item.indexOf}>
//           <input type="checkbox" value={item} />
//           <p>{item}</p>
//         </CheckboxWrapper>
//       ))}
//     </FilterItemContainer>
//   );
// };

export default StyledCheckbox;

const FilterItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
`;

// NOTE: 보더박스 + 선택시 배경색 변경
// const CheckboxWrapper = styled.label`
//   display: flex;
//   &:not(:last-child) {
//     margin-right: 20px;
//   }

//   & input {
//     display: none;
//     margin-right: 5px;
//   }

//   & p {
//     &:hover {
//       cursor: pointer;
//     }
//     /* NOTE: 보더 박스 디자인*/
//     padding: 5px 10px;
//     border: 1px solid ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
//     border-radius: 5px;
//     &::before {
//       content: "#";
//     }
//   }

//   &.isChecked {
//     & > p {
//       border-color: transparent;
//       background-color: #038c5a;
//     }
//   }
// `;

// NOTE: 체크박스 보이는 버전
const CheckboxWrapper = styled.label`
  display: flex;
  &:not(:last-child) {
    margin-right: 20px;
  }

  & p {
    &:hover {
      cursor: pointer;
    }
  }
`;
