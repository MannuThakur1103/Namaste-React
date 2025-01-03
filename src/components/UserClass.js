import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : @MannuThakur1103</h3>
      </div>
    );
  }
}

export default UserClass;
