import React, { useState } from "react";
import { Button, Form, Modal as AntdModal } from "antd";
import { FormInput } from "../Form/FormInput";
const EntriesFormModal = ({ isOpen = false, onCancel, data, onSubmit }) => {
  const [values, setValues] = useState(data);

  const onFinish = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleTextChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCheckBox = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <AntdModal open={isOpen} onCancel={onCancel} footer={null}>
      <form onSubmit={onFinish}>
        <FormInput onChange={handleTextChange} label="API" value={values.API} />
        <FormInput
          onChange={handleTextChange}
          label="Auth"
          value={values.Auth}
        />
        <FormInput
          onChange={handleCheckBox}
          label="HTTPS"
          type="checkbox"
          checked={values.HTTPS}
        />
        <FormInput
          onChange={handleTextChange}
          label="Category"
          value={values.Category}
        />
        <FormInput
          onChange={handleTextChange}
          label="Cors"
          value={values.Cors}
        />
        <FormInput
          onChange={handleTextChange}
          label="Description"
          value={values.Description}
        />
        <FormInput
          onChange={handleTextChange}
          label="Link"
          value={values.Link}
          placeholder="https://www.example.com"
        />
        <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          Submit
        </Button>
      </form>
    </AntdModal>
  );
};

export { EntriesFormModal };
