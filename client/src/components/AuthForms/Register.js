import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const Register = () => {


  const [formData, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className="p-5" onSubmit={handleSubmit}>
      <h2 className="text-center">Sign up</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
          placeholder="Enter Name"
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          type="text"
          placeholder="Enter Last Name"
        />

        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="email"
          placeholder="Enter email"
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
