import React, { Component } from "react";
import "../CollaborationTools/CollaborationTools.css";
export default class CollaborationTools extends Component {
  render() {
    return (
      <div>
        <p className="text-center mt-4">
          <a href="#">
            <b>chat/Group Chat</b>
          </a>{" "}
          |{" "}
          <a href="#">
            <b>Audio Call</b>
          </a>{" "}
          |{" "}
          <a href="#">
            <b>Video Call</b>
          </a>{" "}
          |{" "}
          <a href="#">
            <b>
              <span className="bg-dark text-light screen">Screen Share</span>
            </b>
          </a>
          <a href="#">
            {" "}
            | <b>White board</b>
          </a>
        </p>
        <h4 className="text-center share">Share Your Screen</h4>
        <form className="text-center">
          <input
            type="checkbox"
            name="screen"
            value="Team Channel"
            className="team"
            id="team"
          />
          <label id="team">Team Channel</label>
          <input
            type="checkbox"
            name="screen"
            value="Individual"
            className="team"
            id="Individual"
          />
          
          <label for="Individual">Individual</label>
          <br />
          <select>
            <option>Team Channels</option>
            <option>SoftwateDevelopment</option>
            <option>Management</option>
            <option>HumanResource</option>
          </select>
          <br />
          <button className="mt-4 bg-dark text-white share-button-1">
            Share
          </button>
        </form>
      </div>
    );
  }
}
