import React from "react";
import like from "../NewsFeed/Images/like.png";
import comment from '../NewsFeed/Images/comment.png';
import profileee from '../NewsFeed/Images/profilee.jpg';
class DisplayFilesComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      count: 0
    };
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    fetch("http://localhost:4000/api/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div className="container">
        <div className="row" style={{ paddingLeft: "400px" }}>
          <div className="col-xl-12">
            {items.users.map((item,i) => (
              <div className="container" key={i}>
                <img src={profileee} className="profile-image"></img>
                 <span> by Eric Aswald</span>
                <br></br>
                <b>
                  Lorem ipsum dolor sit, magni possimus veniam incidunt ad
                  <br /> necessitatibus commodi.
                </b>
                <img src={item.profileImg} className="newsfeed-image"/>
                <br />
                {this.state.count}
                <br />
                <img
                  src={like}
                  className="like-button"
                  onClick={this.onIncrement}
                ></img>
               <span>
               <img
                  src={comment}
                  className="comment-button"
                ></img> <span className="comment-list">19 comments</span>
               </span>
               <span>
               <span className="comment-add">Add a comment</span>
                 <img src={profileee} className="profile-image-bottom"/>
               </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayFilesComponents;
