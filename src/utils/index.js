import React from 'react'
import "./index.scss"

const Overlay = ({callback, type}) => {
  return (
    <div onClick={() => {callback(false)}} className='overlay'></div>
  )
}

export  { Overlay }