import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UserForm from "./UserForm";
import StopWatch from "./watch-project/components/StopWatch";
import { addUserToBackend, deleteUserFromBackend, getApiData } from "./../utility";
//import type { ColumnsType } from 'antd/es/table';

function Home() {
  const [users, setUsers] = useState([]);
  const [srNo, setSrNo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState("");

  const [userList, setUserList] = useState([]);

  // useEffect(async () => {
  //   // let data = await getApiData()
  //   // console.log(data);
  //   fetchdata()

  // }, [])
  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    try {
      let data = await getApiData()
      console.log("00000000000", data.payload);

      let modifiedData = data?.payload?.map(elm => {
        return {
          srNo: elm._id,
          firstName: elm.firstName,
          lastName: elm.lastName,
          email: elm.email
        }
      })

      setUserList(modifiedData)

      let d = {
        srNo: 123,
        firstName: "Pavan",
        lastName: "Pooja"
      }


    } catch (error) {
      console.log("---------error------", error)
    }
  }

  // fetchdata()



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
  const handleDelete = async (index) => {
    //const userIdToDelete = '64b909824e173e49969a6deb';
    let selectedUser = userList[index]
    console.log("------selectedUser-----", selectedUser);
    let id = selectedUser.srNo;
    await deleteUserFromBackend(id).then((resp) => {
      console.log("user deleted successfully:", resp);
    })
      .catch((error) => {
        console.log("error deleting user:", error);
      })
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

    //handleOk();
    try {
      await addUserToBackend(user);
      console.log("user added successfully!");
      setUserList([...userList, user])
    } catch (error) {
      alert(error)
      console.log("error adding user:", error);
    }
  }

  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(true);
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
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <UserForm addUserToList={addUserToList} />
      </Modal>
      <Table columns={columns} dataSource={userList} />


    </div>
  );
}

export default Home;