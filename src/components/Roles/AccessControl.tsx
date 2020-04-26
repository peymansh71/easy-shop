import React, { useState } from "react";
import { Button, Table, Checkbox, Select } from "antd";

export default function AccessControl() {
  // const data: any[] | undefined = [];

  // for (let i = 0; i < 13; i++) {
  //   data.push({
  //     key: i,
  //     companyAddress: <Checkbox onChange={(e) => changings(e, i)}></Checkbox>,
  //   });
  // }

  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record: any, selected: any, selectedRows: any) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < 5; i++) {
    children.push(
      <Option value={i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const data = [
    {
      key: 1,
      name: "John Brown sr.",
      children: [
        {
          key: 11,
          name: "John Brown",
          age: 42,
          address: "New York No. 2 Lake Park",
        },
      ],
    },
    {
      key: 2,
      name: "John Brown sr.",
      children: [
        {
          key: 11,
          name: "John Brown",
          age: 42,
          address: "New York No. 2 Lake Park",
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
      <img src={ARROWDOWN} alt="" />

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
