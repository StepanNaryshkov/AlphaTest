import React, {FC} from "react";

export interface Props {
  text: string,
  handleClick: () => void;
}

const Button:FC<Props> = ({handleClick, text}) => {
  return (<button className="btn" onClick={handleClick} data-testid='btn'>{text}</button>)
}

export default React.memo(Button);
