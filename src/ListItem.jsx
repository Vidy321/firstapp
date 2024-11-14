import React, { memo } from 'react'

function ListItem({student}) {
    console.log("rendered",student.name)
  return (
    <li>{student.name}</li>
  )
}

export default memo(ListItem)
