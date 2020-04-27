import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";

import Create from "./Create";

import { getRolesData } from "../../redux/actions/RolesActions";

export default function View<IProps>() {
  const [stateVisible, setStateVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const rolesData = useSelector((state: { roles: [] }) => state.roles);

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    setData(rolesData);
  }, [rolesData]);

  const [datas, setData] = useState([] as any);

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

  const roleActions = (action: string, roles: any) => {
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

  // const data: any[] | undefined = [];

  // const dataaa = datas.map((i: any) => data.push(i));

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
      width: 250,
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
        <Button className="button">Import</Button>
        <Button className="button">Export</Button>
        <Button className="button">Save</Button>
        <Button className="button">?</Button>
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
