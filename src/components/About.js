import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>This is about us</h1>
      <div>
        <User />

        <UserClass />
      </div>
    </div>
  );
};

export default About;
