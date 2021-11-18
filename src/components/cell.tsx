import React, {FC} from 'react';
import CNST from '../const';

interface Props {
  cell: number,
}

const Cell:FC<Props> = ({cell}) => {
  return (<div
    className='cell'
    style={{
      backgroundColor: cell === CNST.LIVE_CELL ? 'black' : 'initial'
    }}
  />)
}

export default React.memo(Cell);
