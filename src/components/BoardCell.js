import React from 'react';

const BoardCell = ({value, onClick, isDisabled, isWinningSquare}) => {    
    let className = 'square';

    if (isWinningSquare) { className += ' active'};    
    return (
        <button className={className}                
            disabled={isDisabled}
            onClick={() => onClick()}>
            {value}
        </button> 
               
    );
}
export default BoardCell;