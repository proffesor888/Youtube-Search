import React, { Component } from 'react';

class Video extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className='video'>
                <iframe title={this.props.match.params.id} width={'560'} height={'360'} src={`https://www.youtube.com/embed/${this.props.match.params.id}`} frameBorder='0' allowFullScreen></iframe>
            </div>
        )
    }
}

export default Video;