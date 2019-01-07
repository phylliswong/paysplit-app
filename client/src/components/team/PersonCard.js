import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    return (
      <div className="team-card">
        <img width="100%" className={this.props.imgClass} />
        <div className="team-card-body">
          <div className="team-card-name">{this.props.name}</div>
          <div className="team-card-sub">{this.props.subtext}</div>
          <div className="team-card-content">
            {this.props.content}
          </div>
          <a target="_blank" href={this.props.url}>github</a>
        </div>
      </div>
    )
  }
}

export default PersonCard;
