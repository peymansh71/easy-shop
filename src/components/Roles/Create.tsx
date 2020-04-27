import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal, Button, Input, Form, DatePicker } from "antd";

import { postNewRoleData } from "../../redux/actions/RolesActions";

interface IProps {
  show: boolean;
  onclose: () => void;
}

export default function Create({ show, onclose }: IProps) {
  // const [roleName, setRoleName] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  const [roleName, setRoleName] = useState({});
  const [StartDate, setSatrtDate] = useState({});
  const [EndDate, setEndDate] = useState({});

  const onChange = (value: any) => {
    setRoleName(value);
  };

  const onStartTimeChange = (date: any, dateString: any) => {
    setSatrtDate(dateString);
  };

  const onEndTimeChange = (date: any, dateString: any) => {
    setEndDate(dateString);
  };

  const apiConf = {
    params: {
      clientAccountID: 2,
      recordStatusID: 2,
      actionDate: StartDate,
      name: roleName,
      categoryStatusId: 1,
      effectiveFromDate: StartDate,
      effectiveToDate: EndDate,
    },
  };

  const callRoleApi = () => {
    dispatch(postNewRoleData(apiConf));
    onclose();
  };

  return (
    <div className="create-role">
      <Modal
        title="Basic Modal"
        visible={show}
        onOk={onclose}
        footer={null}
        closable
        onCancel={onclose}
      >
        <Form
          name="basic"
          initialValues={{ remember: false }}
          className="create-role__form"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Role Name"
            name="Role Name"
            rules={[{ required: true, message: "Role Name" }]}
          >
            <Input
              placeholder="input with clear icon"
              allowClear
              onChange={(e) => onChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Start Date"
            name="Start Date"
            rules={[{ required: false, message: "Start Date" }]}
          >
            <DatePicker
              onChange={onStartTimeChange}
              className="create-role__datepicker"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="End Date"
            rules={[{ required: false, message: "End Date" }]}
          >
            <DatePicker
              onChange={onEndTimeChange}
              className="create-role__datepicker"
              size="large"
            />
          </Form.Item>
        </Form>

        <Button htmlType="submit" onClick={callRoleApi}>
          create
        </Button>
      </Modal>
    </div>
  );
}
