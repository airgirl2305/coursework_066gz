import "./Profile.sass";

export const Profile = (props) => {
  const familyStyle = {
    color: "blue",
    fontSize: "1.2rem",
  };
  let user_id = window.location.pathname.split("/")[2];
  let user = props.function(user_id);

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={user.avatar} alt="аватар пользователя" width="100%" />
      </div>
      <div className="col-md-8">
        <p className="id">
          <span>ID: </span>
          <span>{user.id}</span>
        </p>
        <p className="email">
          <span>Email: </span>
          <span>{user.email}</span>
        </p>
        <p>
          <span style={familyStyle}>Имя: </span>
          <span>
            {user.username}
          </span>
        </p>
        <p style={{ color: "red", fontSize: "1.5rem" }}>Рассказ о себе</p>
      </div>
    </div>
  );
};
