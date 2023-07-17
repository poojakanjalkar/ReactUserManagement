import React, { useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UserForm from "./UserForm";
import StopWatch from "./watch-project/components/StopWatch";
//import type { ColumnsType } from 'antd/es/table';

function Home() {
  const [users, setUsers] = useState("");
  const [srNo, setSrNo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState("");

  const [userList, setUserList] = useState([]);

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
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <DeleteOutlined onClick={() => { handleDelete(index) }}></DeleteOutlined>
          <EditOutlined />
        </Space>)

    }

  ];
  const handleSrChange = (event) => {
    setSrNo(event.target.value);
  };
  const handleDelete = (index) => {
    let newList = userList.filter((elm, i) => {
      return i != index;

    })
    setUserList(newList)
  }


  function handleAddUser() {
    /*const newUser = (event.target.value);*/
    /*srNo: 1,
    firstName: "",
    lastName: "",
    email: ""*/

    setUserList([...userList]);
    setSrNo("");
    showModal();

  }

  const addUserToList = async (user) => {
    console.log("user detatils", user);
    setUserList([...userList, user])
    handleOk();
  }

  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  }



  return (
    <div>
      <StopWatch />
      <button
        className="myButton"
        onClick={(e) => {
          handleAddUser(e);
        }}
      >
        Add New User
      </button>
      <Modal title="Basic Modal" open={isModalOpen}>
        <UserForm addUserToList={addUserToList} />
      </Modal>
      <Table columns={columns} dataSource={userList} />


    </div>
  );
}

export default Home;
