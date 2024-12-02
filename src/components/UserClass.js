import React from "react";


//Class based component
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const {name, location} = this.props;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : @MannuThakur1103</h3>
      </div>
    );
  }
}

export default UserClass;
