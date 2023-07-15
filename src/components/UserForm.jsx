import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";
function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fullDetails, setFullDetails] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit() {
    setFullDetails(`${firstName} ${lastName} ${email}`);
  }

  return (
    <div>
      <h1>{fullDetails}</h1>
      <Form>
        <Form.Item
          name="Fisrt Name"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input
            onChange={(e) => {
              handleFirstNameChange(e);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Last Name"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input
            onChange={(e) => {
              handleLastNameChange(e);
            }}
          />
        </Form.Item>
        <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
          <Input
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
        </Form.Item>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserForm;
