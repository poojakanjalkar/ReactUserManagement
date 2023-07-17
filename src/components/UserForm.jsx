import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";
function UserForm(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fullDetails, setFullDetails] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  useEffect(() => {
    console.log("-------------------", "clearing Input")
    clearInput()
    setIsSubmitted(false)
  }, [])

  useEffect(() => {
    console.log("-------------------", "clearing Input")
    clearInput()
  }, [isSubmitted])

  async function handleSubmit() {
    let user = { firstName: firstName, lastName: lastName, email: email }

    props.addUserToList(user);
    setIsSubmitted(!setIsSubmitted)

    setFullDetails(`${firstName} ${lastName} ${email}`);

  }

  const clearInput = () => {
    setFirstName("")
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
            value={firstName}
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
            value={email}
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
