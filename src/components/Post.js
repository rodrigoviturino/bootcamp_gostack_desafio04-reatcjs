import React from 'react';

function Post (props) {
  return (
    <div className="post-item container">

      <div className="post-item-header">
          <img src={props.data.author.avatar} />
        <div className="post-item-header-text">
          <h4>{props.data.author.name}</h4>
          <span>{props.data.date}</span>
        </div>
      </div>

      <div className="post-item-content">
        <p>{props.data.content}</p>
      </div>

      { props.data.comments.map (comentario => (
        <div className="post-item-comments" key={props.data.comments.id}>
          {/* <img src="#" /> */}
            <img src={comentario.author.avatar} />
            <div className="post-item-comments-text">
              <p>
                <span>{comentario.author.name}</span>
                {comentario.content}
              </p>
            </div>
        </div>
      ))}

    </div>
  )
}

export default Post;