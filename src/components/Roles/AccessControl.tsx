import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAccessControlData,
  getModulePageFieldData,
} from "../../redux/actions/RolesActions";

import { Button, Table, Checkbox, Select, Radio } from "antd";

export default function AccessControl() {
  const { accessControls, roles } = useSelector(
    (state: { accessControls: any[]; roles: any[] }) => state
  );
  const [datas, setData] = useState([] as any);
  const [role, selectRole] = useState<string | number>("");

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    setData(accessControls);
  }, [accessControls]);

  const callApi = () => {
    const apiConf = {
      params: {},
    };
    dispatch(getAccessControlData(apiConf));
    dispatch(getModulePageFieldData(apiConf));
  };

  const [stateValue, setStateValue] = useState<number | undefined>(0);
  const dispatch = useDispatch();

  const { Option } = Select;

  const onChangeRadio = (e: any) => {
    setStateValue(e.target.value);
  };

  const selectAll = (field: string) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    let newData = ([] as any).concat(datas);
    setData(newData.map((i: any) => ({ ...i, [field]: true })));
  };

  const deselectAll = (field: string) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    let newData = ([] as any).concat(datas);
    setData(newData.map((i: any) => ({ ...i, [field]: false })));
  };

  const innerJoin = (xs: any[], ys: any[], sel: any) =>
    xs.reduce(
      (zs, x) =>
        ys.reduce(
          (
            zs,
            y // cartesian product - all combinations
          ) => zs.concat(sel(x, y) || []), // filter out the rows and columns you want
          zs
        ),
      []
    );

  function getNestedChildren(array: any[], moduleName?: string) {
    let arr = [...array];
    return arr.reduce((acc, item: any, arrIndex: number) => {
      if (item.name === item.moduleName) {
        item.children = [...array]
          .filter((i) => i.moduleName === item.name && i.moduleName !== i.name)
          .map(addCheckBoxFields);
        let newItem = addCheckBoxFields(item);
        newItem.name = (
          <>
            <Radio value={item.id}>{item.moduleName}</Radio>
          </>
        );
        acc.push(newItem);
      }
      return acc;
    }, []);
  }

  const columns = [
    {
      title: (
        <>
          <Select
            className="access-control__select"
            size="large"
            placeholder="choose..."
            onChange={(e: string | number) => selectRole(e)}
            style={{ width: 300 }}
          >
            {roles.map((role) => (
              <Option value={role.id} key={role.id}>
                {role.name}
              </Option>
            ))}
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
                onClick={selectAll("noAccessFlag")}
              >
                Select All
              </Button>
              <Button
                className="button"
                size="small"
                onClick={deselectAll("noAccessFlag")}
              >
                Deselect All
              </Button>
            </>
          ),
          dataIndex: "noAccessFlag",
          key: "noAccessFlag",
          width: 100,
        },
      ],
      dataIndex: "noAccessFlag",
      key: "noAccessFlag",
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
          dataIndex: "readonlyFlag",
          key: "readonlyFlag",
          width: 100,
        },
      ],
      dataIndex: "readonlyFlag",
      key: "readonlyFlag",
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
          dataIndex: "readWriteFlag",
          key: "readWriteFlag",
          width: 120,
        },
      ],
      dataIndex: "readWriteFlag",
      key: "readWriteFlag",
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
          dataIndex: "dataImportFlag",
          key: "dataImportFlag",
          width: 120,
        },
      ],
      dataIndex: "dataImportFlag",
      key: "dataImportFlag",
      ellipsis: true,
    },
    {
      title: "dataExportFlag",
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
          dataIndex: "dataExportFlag",
          key: "dataExportFlag",
          width: 120,
        },
      ],
      dataIndex: "dataExportFlag",
      key: "dataExportFlag",
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
          dataIndex: "voidUndoFlag",
          key: "voidUndoFlag",
          width: 120,
        },
      ],
      dataIndex: "voidUndoFlag",
      key: "voidUndoFlag",
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
          dataIndex: "fullAccessFlag",
          key: "fullAccessFlag",
          width: 120,
        },
      ],
      dataIndex: "fullAccessFlag",
      key: "fullAccessFlag",
    },
  ];

  const onCheckBoxChange = (i: number, field: string) => (e: any) => {
    let newData = ([] as any).concat(datas);
    let target = newData.find((item: any) => item.id === i);
    target[field] = e.target.checked;
    if (field === "noAccessFlag" && e.target.checked) {
      // some properties should set flase when No Access has been selected
      target.readonlyFlag = target.readWriteFlag = target.dataImportFlag = target.dataExportFlag = target.voidUndoFlag = target.fullAccessFlag = !e
        .target.checked;
    } else if (field === "fullAccessFlag" && e.target.checked) {
      // some properties should set true when full Access has been selected
      target.readonlyFlag = target.readWriteFlag = target.dataImportFlag = target.dataExportFlag = target.voidUndoFlag =
        e.target.checked;
      target.noAccessFlag = !e.target.checked;
    } else {
      // otherwise it should change no access and full access to false
      target.noAccessFlag = target.fullAccessFlag = false;
    }
    setData(newData);
  };

  const getCheckBox = (row: any, field: string) => (
    <Checkbox
      checked={row[field]}
      onChange={onCheckBoxChange(row.id, field)}
    ></Checkbox>
  );

  const addCheckBoxFields = (row: any) => {
    let newRow = { ...row };
    newRow.noAccessFlag = getCheckBox(newRow, "noAccessFlag");
    newRow.fullAccessFlag = getCheckBox(newRow, "fullAccessFlag");
    newRow.readonlyFlag = getCheckBox(newRow, "readonlyFlag");
    newRow.readWriteFlag = getCheckBox(newRow, "readWriteFlag");
    newRow.dataImportFlag = getCheckBox(newRow, "dataImportFlag");
    newRow.dataExportFlag = getCheckBox(newRow, "dataExportFlag");
    newRow.voidUndoFlag = getCheckBox(newRow, "voidUndoFlag");
    return newRow;
  };

  const manipulateData = (): { [id: string]: any }[] => {
    let cols = [
      {
        // this is replacement of corrupted route:https://easyshop-api.azurewebsites.net/api/modulepagefield
        id: 1,
        name: "purchase",
        moduleName: "purchase",
      },
      {
        id: 2,
        name: "purchase order",
        moduleName: "purchase",
      },
    ];

    if (datas && datas.length && role) {
      const result = innerJoin(
        cols,
        datas,
        (col: any, accessControl: any) =>
          col.id === accessControl.modulePageFieldID && {
            ...accessControl,
            ...col,
            id: accessControl.id,
          }
      );
      return (
        getNestedChildren(result.filter((i: any) => i.roleId === role)) || []
      );
    }
    return [];
  };

  return (
    <div className="access-control">
      <div className="access-control__public">
        <Button className="button">save</Button>
        <Button className="button">?</Button>
      </div>

      {accessControls && accessControls.length && (
        <Table
          columns={columns}
          size="small"
          className="table"
          dataSource={manipulateData()}
          bordered
          pagination={false}
        />
      )}
    </div>
  );
}
