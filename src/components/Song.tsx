import React, { Component } from "react";

class Song extends Component {
  render(){
    const {title} = this.props;

    return(

      <div class="song-title">
        <h2>{title}</h2>
      </div>
    )
  }
}

export default Song
