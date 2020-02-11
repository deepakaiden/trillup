import "date-fns";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import "./Webinar.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default class Webinar extends Component {
  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = useState(
  //   new Date("2014-08-18T21:11:54")
  // );
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      time: new Date("2014-08-18T21:11:54"),
      date: new Date("2014-08-18T21:11:54")
    };
  }
  onChangeTopic = e => {
    this.setState({ topic: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  handleDateChange = e => {
    this.setState({ date: e });
  };
  handleTimeChange = e => {
    this.setState({ time: e });
  };
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  handleSubmit = e => {
    e.preventDefault();
    const userObject = {
      topic: this.state.topic,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time
    };

    axios
      .post("http://localhost:4000/users/create", userObject)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ topic: "", description: "", date: "", time: "" });
  };
  render() {
    const { topic, description, time, date } = this.state;
    console.log("Topic ---" + topic);
    console.log("Description----" + description);
    console.log("Time----" + time);
    console.log("Date----" + date);

    return (
      <>
        <div className="nav-section head">
          <p>SCHEDULING WEBINAR</p>
          <span>JOIN A WEBINAR</span>
        </div>
        <div className="nav-section sub">
          <b>My Webinar</b> &nbsp; > &nbsp; <p>Schedule a Webinar</p>
        </div>
        <div className="wrapper">
          <form className="form-wrapper" onSubmit={this.handleSubmit}>
            <label>Topic</label>
            <input
              value={this.state.topic}
              onChange={this.onChangeTopic}
              type="text"
              placeholder="Enter the Topic for Webinar"
              style={{
                width: "65%",
                marginLeft: "110px",
                borderRadius: "3px solid grey"
              }}
            />
            <br />
            <div
              className="form-group"
              style={{ display: "flex", width: "90%", height: "140px" }}
            >
              <label>Description(Optional)</label>
              <textarea
                value={this.state.description}
                onChange={this.onChangeDescription}
                className="form-control"
                placeholder="Enter your descrption here"
                rows="2"
                id="comment"
              ></textarea>
            </div>
            <br />
            <label>When</label>
            <div className="date-time-picker" style={{ display: "flex" }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <div className="date-picker">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date"
                      format="MM/dd/yyyy"
                      value={this.state.date}
                      onChange={this.handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </div>
                  <div className="time-picker">
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time"
                      value={this.state.time}
                      onChange={this.handleTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </div>
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
            <br />
            <label>Duration</label>
            <input type="number" min="1" max="12" /> hr
            <span>
              <input type="number" min="1" max="59" />
              min
            </span>
            <br />
            <label>Webinar ID</label>
            <span>
              {" "}
              <input type="checkbox" style={{ marginLeft: "70px" }}  /> Generate
              Automatically <input type="checkbox" /> Personal ID 2312312
            </span>
            <br />
            <label>Share ID</label>
            <span>
              {" "}
              <input type="checkbox" style={{ marginLeft: "86px" }} /> Team
              Channels
              <input type="checkbox" style={{ marginLeft: "61px" }} />{" "}
              Individual
            </span>
            <br />
            <div className="submitButtons">
              <input
                type="submit"
                value="Save"
                className="btn btn-primary"
              ></input>
              {/* <span>
                <input type="submit"  value="Cancel" className="btn btn-danger"></input>
              </span> */}
            </div>
          </form>
        </div>
      </>
    );
  }
}
