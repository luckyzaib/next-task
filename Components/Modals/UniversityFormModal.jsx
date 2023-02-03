import React, { useState } from "react";
import { Button, Form, Modal as AntdModal } from "antd";
import { FormInput } from "../Form/FormInput";
const UniversityFormModal = ({ isOpen = false, onCancel, data, onSubmit }) => {
  const [values, setValues] = useState(data);

  const onFinish = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleTextChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleArrayValue = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <AntdModal open={isOpen} onCancel={onCancel} footer={null}>
      <form onSubmit={onFinish}>
        <FormInput
          onChange={handleTextChange}
          name="alpha_two_code"
          label="Alpha Two Code"
          value={values.alpha_two_code}
        />
        <FormInput
          onChange={handleTextChange}
          name="country"
          label="Country"
          value={values.country}
        />
        <FormInput
          onChange={handleArrayValue}
          name="domains"
          label="Domains"
          value={values.domains[0]}
        />
        <FormInput
          onChange={handleTextChange}
          name="name"
          label="Name"
          value={values.name}
        />
        <FormInput
          onChange={handleTextChange}
          name="state-province"
          label="State Province"
          value={values["state-province"]}
        />
        <FormInput
          onChange={handleArrayValue}
          name="web_pages"
          label="Web Pages"
          value={values?.web_pages[0]}
          placeholder="https://www.example.com"
        />
        <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          Submit
        </Button>
      </form>
    </AntdModal>
  );
};

export { UniversityFormModal };
