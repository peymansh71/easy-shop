import React, { useState } from "react";
import { Modal, Button, Input, Form, DatePicker } from "antd";

interface IProps {
  show: boolean;
  onclose: () => void;
}

export default function Dashboard({ show, onclose }: IProps) {
  // const [roleName, setRoleName] = useState<string | undefined>(undefined);

  const onChange = (value: any) => {
    // setRoleName(e.value);
    console.log(value);
  };

  const onStartTimeChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  const onEndTimeChange = (date: any, dateString: any) => {
    console.log(date, dateString);
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

        <Button onClick={onclose}>create</Button>
      </Modal>
    </div>
  );
}
