import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import Create from "./Create";

import { getRolesData } from "../../redux/actions/RolesActions";
import { useDispatch } from "react-redux";

export default function View<IProps>() {
  const [stateVisible, setStateVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    callApi();
  });

  const callApi = async () => {
    const apiConf = {
      params: {},
    };
    dispatch(getRolesData(apiConf));
  };

  const showModal = () => {
    setStateVisible(true);
  };

  const handleOk = () => {
    setStateVisible(false);
  };

  const roleActions = (action: string, roles: object) => {
    console.log(action, roles);
  };

  const data = [
    {
      key: "1",
      roleId: 20,
      Role: "John Brown",
      status: false,
      DateCreated: 32,
      LatestUpdateDate: 55,
    },
    {
      key: "2",
      roleId: 22,
      Role: "Jim Green",
      status: false,
      DateCreated: 42,
      LatestUpdateDate: 55,
    },
    {
      key: "3",
      roleId: 23,
      Role: "Joe Black",
      status: false,
      DateCreated: 32,
      LatestUpdateDate: 55,
    },
  ];

  const columns = [
    {
      title: "Role",
      dataIndex: "Role",
      key: "Role",
      render: (text: React.ReactNode) => <a href="./home">{text}</a>,
    },
    {
      title: "Date Created",
      dataIndex: "DateCreated",
      key: "DateCreated",
    },
    {
      title: "Latest Update Date",
      dataIndex: "LatestUpdateDate",
      key: "LatestUpdateDate",
    },
    {
      title: "Stauts",
      key: "action",
      ellipsis: true,
      render: (roles: any) => (
        <span>
          {["Active", "Inactive", "Delete"].map((action: string, index) => {
            return (
              <Button
                key={action + index}
                className={
                  " table__actions " +
                  (roles.status
                    ? `table__actions--${action === "Active" ? "active" : ""}`
                    : `table__actions--${
                        action === "Inactive" ? "active" : ""
                      }`)
                }
                onClick={() => roleActions(action, roles)}
              >
                {action}
              </Button>
            );
          })}
        </span>
      ),
    },
  ];

  return (
    <div className="main">
      <div className="main__pubilc">
        <Button className="button" onClick={showModal}>
          Import
        </Button>
        <Button className="button" onClick={showModal}>
          Export
        </Button>
        <Button className="button" onClick={showModal}>
          Save
        </Button>
        <Button className="button" onClick={showModal}>
          ?
        </Button>
      </div>

      <Button className="button" onClick={showModal}>
        Create New Role
      </Button>

      <Create show={stateVisible} onclose={handleOk} />

      <Table
        columns={columns}
        size="small"
        className="table"
        dataSource={data}
        bordered
        pagination={false}
      />

      <div className="main__rows">
        <Button className="button" onClick={showModal}>
          Previous 10 Rows
        </Button>
        <Button className="button" onClick={showModal}>
          Next 10 Rows
        </Button>
      </div>
    </div>
  );
}
