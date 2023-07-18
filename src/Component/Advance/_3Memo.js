import React from 'react'

function _3Memo({name}) {
    console.log('renderring memo component');
  return (
    <div>{name}</div>
  )
}

export default React.memo(_3Memo) 