import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import UserForm from "./UserForm";
//import type { ColumnsType } from 'antd/es/table';

function Home() {
  const [users, setUsers] = useState("");
  const [srNo, setSrNo] = useState("");
  
  const [userList, setUserList] = useState([]);
  /*const userList = [
    { srNo: 1, firstName: "pavan", lastName: "Adhav", email: "test@gmail.com" },
    {
      srNo: 2,
      firstName: "Pooja",
      lastName: "kanajlakr",
      email: "demo@gmail.com"
    }
  ];*/
  const columns = [
    {
      title: "sr No.",
      dataIndex: "srNo"
    },
    {
      title: "First Name",
      dataIndex: "firstName"
    },
    {
      title: "Last Name",
      dataIndex: "lastName"
    },
    {
      title: "Email",
      dataIndex: "email"
    }
  ];
  const handleSrChange = (event) => {
    setSrNo(event.target.value);
  };

  
  function handleAddUser() {
    const newUser = {
      srNo: 1,
      firstName: "Pooja",
      lastName: "Kanjalkar",
      email: "test@gmail.com"
    };
    setUserList([...userList, newUser]);
    setSrNo("");
    
  }

  return (
    <div>
      <button
        className="myButton"
        onClick={(e) => {
          handleAddUser(e);
        }}
      >
        Add New User
      </button>
      <Table columns={columns} dataSource={userList} />;
      <UserForm />
    </div>
  );
}

export default Home;
