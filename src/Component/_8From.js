import React, { Component } from 'react';

export class _8From extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userName: '',
      comments: '',
      topic : 'angular'
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  }
  handleTopicChange = (event) => {
    this.setState({
      topic : event.target.value
    });
  }

  handleSubmit = (event)=>{
    const { userName, comments , topic } = this.state;
    alert(`${userName} ${comments}  ${topic}`)
    event.preventDefault()

  }

  render() {
    const { userName, comments , topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={userName} onChange={this.handleUserNameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentChange} cols="30" rows="10"></textarea>
        </div>
        <div>
        <label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
        <option value="react" key="">React</option>
        <option value="angular" key="">Angular</option>
        <option value="vue" key="">Vue</option>
        </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default _8From;
