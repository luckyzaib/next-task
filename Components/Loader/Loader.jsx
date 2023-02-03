import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  );
};

export  {Loader};
