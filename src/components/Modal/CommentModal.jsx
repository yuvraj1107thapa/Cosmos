import React from 'react'
import Comment from '../Comment/Comment'

const CommentModal = ({open}) => {
  return (
    <div> <div className="modalContainer">
    <div className="modal">
      <div className="cancelBtn">
        <h3>Add Comment</h3>
        <button id="btnCancel" onClick={() => open(false)}>
          {" "}
          X{" "}
        </button>
      </div>
      <Comment />
     
   
    </div>
  </div></div>
  )
}

export default CommentModal