const User = (props) => {
  return (
    <div className="user-card">
      <h1>Name : {props.name}</h1>
      <h2>Location : Pune</h2>
      <h3>Contact : @MannuThakur1103</h3>
    </div>
  );
};

export default User;
