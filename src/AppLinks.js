import { Link } from "react-router-dom";

function AppLinks() {
  const studentId = "123456";
  return <>
    <a href='/'>Home</a> | {" "}
    <Link to='/'>Home</Link> | {" "}
    <Link to='/about'>About</Link> | {" "}
    <Link to='/contact'>Contact</Link> | {" "}
    <Link to={`/student/${studentId}`}>John Doe</Link>
  </>;
}

export default AppLinks;
