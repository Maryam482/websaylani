import React from 'react'

export default function Show({name, show}) {
    return (
        <div>
            {`Hello ${name} ${show}`}
        </div>
    )
}
