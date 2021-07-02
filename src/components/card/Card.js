import './Card.css';
import React from 'react'

export default function Card(props) {
  const { gitProfile, deleteCallback } = props
  return (
    <div className="tooltip">
      <div className="card-wrapper">
        <div className="img-wrapper">
          <span className="close" onClick={() => deleteCallback(gitProfile.id)}>&#x2715;</span>
          <img className="card-img" src={ gitProfile.avatar_url } />
        </div>
        <a href={gitProfile.html_url} target="_blank">
          <div className="card-details">
            <h4>{ gitProfile.name }</h4>
            <p className="mb-0 font-size-14"><strong>Location:</strong> { gitProfile.location }</p>
            <p className="mb-0 font-size-14"><strong>Followers:</strong> { gitProfile.followers }</p>
          </div>
        </a>
      </div>
      <span className={gitProfile.bio && 'tooltiptext'}>{gitProfile.bio}</span>
    </div>
  )
}
