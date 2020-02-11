import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Webinar from "../Webinar/Webinar";
import NewsFeed from "../NewsFeed/NewsFeed";
import TeamChannels from "../TeamChannels/TeamChannels";
import CollaborationTools from "../CollaborationTools/CollaborationTools";
import FileSharing from "../FileSharing/FileSharing";
import DocumentCollaboration from "../DocumentCollaboration/DocumentCollaboration";
import "../SlideBar/SlideBar.css";
import newsfeed from "../SlideBar/Images/01.png";
import teamchannels from "../SlideBar/Images/02.png";
import webinar from "../SlideBar/Images/03.png";
import collaborationtools from "../SlideBar/Images/04.png";
import filesharing from "../SlideBar/Images/05.png";
import documentcollaboration from "../SlideBar/Images/06.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
export default class NavBar extends Component {
  render() {
    return (
      <div className="slideBar">
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={selected => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="newsfeed">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="News Feed"
                          >
                            <Button>
                              <img
                                src={newsfeed}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>News Feed</NavText>
                    </NavItem>
                    <NavItem eventKey="teamchannels">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="Team Channels"
                          >
                            <Button>
                              <img
                                src={teamchannels}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>Team Channels</NavText>
                    </NavItem>
                    <NavItem eventKey="webinar">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="Webinar"
                          >
                            <Button>
                              <img
                                src={webinar}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>Webinar</NavText>
                    </NavItem>
                    <NavItem eventKey="collaborationtools">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="Collaboration Tools"
                          >
                            <Button>
                              <img
                                src={collaborationtools}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>Collaboration Tools</NavText>
                    </NavItem>
                    <NavItem eventKey="filesharing">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="File Sharing"
                          >
                            <Button>
                              <img
                                src={filesharing}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>File Sharing</NavText>
                    </NavItem>
                    <NavItem eventKey="documentcollaboration">
                      <NavIcon>
                        <Grid item>
                          <Tooltip
                            disableFocusListener
                            disableTouchListener
                            placement="right-start"
                            title="Document Collaboration"
                          >
                            <Button>
                              <img
                                src={documentcollaboration}
                                alt="news feed"
                                style={{ fontSize: "1.75em" }}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                      </NavIcon>
                      <NavText>Document Collaboration</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route
                    path="/webinar"
                    exact
                    component={props => <Webinar />}
                  />
                  <Route path="/newsfeed" component={props => <NewsFeed />} />
                  <Route
                    path="/teamchannels"
                    component={props => <TeamChannels />}
                  />
                  <Route
                    path="/collaborationtools"
                    component={props => <CollaborationTools />}
                  />
                  <Route
                    path="/filesharing"
                    component={props => <FileSharing />}
                  />
                  <Route
                    path="/documentcollaboration"
                    component={props => <DocumentCollaboration />}
                  />
                </main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}
