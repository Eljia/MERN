import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/authActions";

export default function () {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as:{" "}
        <Link to="/dashboard"> {user.name + " " + user.lastName} </Link>
      </Navbar.Text>
      <Button
        variant="danger"
        className="m-2"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Navbar.Collapse>
  );
}
