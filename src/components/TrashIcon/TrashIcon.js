import React from 'react'
import "./TrashIcon.scss";

function TrashIcon({handleDelete, commentTimestamp}) {
  return (
    <button className="comments__trash-button"  onClick={() => handleDelete(commentTimestamp)}></button>
  )
}

export default TrashIcon