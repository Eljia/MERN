import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Navbar.Text>
     
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
               <Button variant="light" className="mx-1">
            Login
        </Button>
          </Link>
      </Navbar.Text>
      <Navbar.Text>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/register"
          >
        <Button variant="light" className="mx-1">
            Register
        </Button>
          </Link>
      </Navbar.Text>
    </>
  );
}
