import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {add_video, clear_store} from '../actions/';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: '',
      videoList: []
    }
  }
  //handels JSON data from API and sending to the Redux's store
  submit() {
    this.props.clear_store([]);
    const {videoName} = this.state;
    const key = 'AIzaSyCUfEwq6BrXwR9AyoUcUf9kYLioQJ039lk';
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoName}&type=video&key=${key}&maxResults=10`;
    let urlJSON = fetch(url, {method: 'GET'});
    urlJSON
    .then((data) => data.json())
    .then((data) => {
      let videoIDmas = data.items;
      let IDitems = videoIDmas.map((item, index) => {
        return this.props.add_video(item);
      })
    })
  }
  render() {
    
    return (
        <div>
          <Form>
            <FormGroup>
              <ControlLabel>Search video</ControlLabel>
              <FormControl
              type='text'
              placeholder='Search..'
              onChange={event => this.setState({videoName: event.target.value})}>
              </FormControl>
              <Button onClick={() => this.submit()}>Submit</Button>
            </FormGroup>
          </Form>
          {/*iteration thru each element in component's props and rendering it out*/}
          {this.props.state.map((item,index) => {
            return (
              <div key={index} className='item'>
                <p className='Title'>Title: {item.snippet.title}</p>
                <Link to= {`/movies/${item.id.videoId}`}>
                <a href={`https://www.youtube.com/embed/${item.id.videoId}`}>
                <img src={item.snippet.thumbnails.high.url} alt='Video'></img>
                </a>
                </Link>                
              </div>
            )
          })} 
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, {add_video, clear_store})(App);
