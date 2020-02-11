import React, { Component } from "react";
import Navbar from "../NewsFeed/Navbar";
import FilesUploadComponent from '../NewsFeed/FilesUploadComponent';
import DisplayFilesComponent from '../NewsFeed/DisplayFilesComponents';

export default class RootComponent extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <FilesUploadComponent/>
        <DisplayFilesComponent/>
      </div>
    );
  }
}
