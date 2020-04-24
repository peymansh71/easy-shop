import React, { useState } from "react";
import { Button, Table, Tag, Checkbox } from "antd";

export default function AccessControl() {
  const data: any[] | undefined = [];

  for (let i = 0; i < 13; i++) {
    data.push({
      key: i,
      companyAddress: <Checkbox onChange={(e) => changings(e, i)}></Checkbox>,
    });
  }

  const columns = [
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
          width: 120,
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
          width: 300,
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
