import React from 'react';
import Show from './Show';
export default function Name({name,show}) {
    return (
        <div>
            <Show name={name} show={show} />
        </div>
    )
}
