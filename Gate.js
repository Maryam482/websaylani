import React from 'react';

const Gate = ({isOpen,isClosed }) => {
    return (
        <div>
           { isOpen  ? 'OPEN' : 'CLOSED'}
        </div>
    )
}
export default Gate;
