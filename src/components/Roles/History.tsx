import React from "react";
import { Select, Form } from "antd";

export default function History() {
  // const layout = {
  //   labelCol: { span: 1 },
  //   wrapperCol: { span: 30 },
  // };

  const { Option } = Select;

  const children = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option value={i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const [form] = Form.useForm();

  return (
    <div className="history">
      {/* <div className="history__public">
        <Button className="button">?</Button>
      </div>

      <Button size="large" className="button">
        show history
      </Button> */}

      {/* <div className="history__filters">
        <Form form={form} name="control-hooks">
          <Form.Item name="gender" label="Filter By Status">
            <Select
              size="large"
              placeholder="choose"
              onChange={() => console.log("asdasd")}
              style={{ width: 400 }}
            >
              {children}
            </Select>
          </Form.Item>
        </Form>
      </div> */}
    </div>
  );
}
