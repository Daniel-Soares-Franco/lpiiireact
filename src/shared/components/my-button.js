import React, { Children } from 'react'

export default function MyButton(props){
    return (
        <button style={{backgroundColor: props.color}} onClick={() => props.alteraPai("green")} >
            {Children.only(props.children)}
        </button>
    )
}