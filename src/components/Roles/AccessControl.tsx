import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAccessControlData } from "../../redux/actions/RolesActions";

import { Button, Table, Checkbox, Select, Radio } from "antd";

export default function AccessControl() {
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    const apiConf = {
      params: {},
    };
    dispatch(getAccessControlData(apiConf));
  };

  const [stateValue, setStateValue] = useState<number | undefined>(0);

  const dispatch = useDispatch();

  // const data: any[] | undefined = [];

  // for (let i = 0; i < 13; i++) {
  //   data.push({
  //     key: i,
  //     companyAddress: <Checkbox  onChange={(e) => changings(e, i)}></Checkbox>,
  //   });
  // }

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < 5; i++) {
    children.push(
      <Option value={i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const onChangeRadio = (e: any) => {
    setStateValue(e.target.value);
  };

  const data = [
    {
      key: 1,
      name: (
        <>
          <Radio.Group onChange={(e) => onChangeRadio(e)} value={stateValue}>
            <Radio value={1}>Purchase</Radio>
          </Radio.Group>
        </>
      ),
      children: [
        {
          key: 11,
          name: "John Brown",
        },
      ],
    },
  ];

  const columns = [
    {
      title: (
        <>
          <Select
            className="access-control__select"
            size="large"
            placeholder="choose..."
            onChange={() => console.log("asdasd")}
            style={{ width: 300 }}
          >
            {children}
          </Select>
        </>
      ),

      children: [
        {
          title: "",
          dataIndex: "name",
          key: "ss",
          width: 100,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
    },
    {
      title: "No Access(invisable)",
      children: [
        {
          title: (
            <>
              <Button
                className="button"
                size="small"
                onClick={() => console.log("object")}
              >
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 100,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Read Only",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 100,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Writer",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Import",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Export",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Void/Undo",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
      ellipsis: true,
    },
    {
      title: "Approve",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
    },
    {
      title: "Full Access(All Items)",
      children: [
        {
          title: (
            <>
              <Button className="button" size="small">
                Select All
              </Button>
              <Button className="button" size="small">
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 120,
        },
      ],
      dataIndex: "DateCreated",
      key: "DateCreated",
    },
  ];

  const changings = (e: any, i: number) => {
    console.log(e, i);
  };

  return (
    <div className="access-control">
      <div className="access-control__public">
        <Button className="button">save</Button>
        <Button className="button">?</Button>
      </div>

      <Table
        columns={columns}
        size="small"
        className="table"
        dataSource={data}
        bordered
        pagination={false}
      />
    </div>
  );
}
