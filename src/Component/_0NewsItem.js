import React, { Component } from 'react';
import _0api from './_0api';

export class _0NewsItem extends Component {
  render() {
    const {title,description,imgUrl,newsUrl} = this.props
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}</h5>
            <p className="card-text">

            {description}
             
            </p>
            <a href={newsUrl} className="btn btn-primary">

            click
               
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default _0NewsItem;
