import React, { Component } from "react";
import axios from "axios";
import '../NewsFeed/NewsFeed.css';
export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: ""
    };
  }

  onFileChange = e => {
    this.setState({ profileImg: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    axios
      .post("http://localhost:4000/api/user-profile", formData, {})
      .then(alert("successfully uploaded the image"),console.log(formData))
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container filesupload" >
        <div className="row">
            <div className="fileuploadbtn">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="file"
                className="btn btn-success"
                onChange={this.onFileChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary upload" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}
