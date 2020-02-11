// import React, { Component } from "react";
// export default class JoinWebinar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isRedirect: false
//     };
//   }
//   redirectToWebinar = () => {
//     this.setState({ isRedirect: !this.state.isRedirect });
//   };
//   render() {
//     return (
//       <div>
//         <div className="nav-section head">
//           <p>SCHEDULING WEBINAR</p>
//           <span onClick={() => this.redirectToWebinar()}>JOIN A WEBINAR</span>
//         </div>
//         <h4 className="text-center share">Join a Webinar</h4>
//         <form className="text-center">
//           <input type="text" placeholder="Webinar ID or Personal ID" />
//           <br />
//           <button className="mt-4 bg-dark text-white">Join</button>
//         </form>
//         {isRedirect ? <Redirect to={{ pathname: "/webinar" }} /> : null}
//       </div>
//     );
//   }
// }

