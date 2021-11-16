import React, {FC} from "react";

interface Props {
}

const Row:FC<Props> = ({children}) => {
  return (<div className='row'>
    {children}
  </div>)
}

export default Row;
