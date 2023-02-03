import React, { useState } from "react";
import { Space, Table as AntdTable } from "antd";

const Table = ({ data, handleEdit, columns = [] }) => {
  const [page, setPage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(25);
  return (
    <AntdTable
      dataSource={data}
      pagination={{
        onChange(current, pageSize) {
          setPage(current);
          setPaginationSize(pageSize);
        },
        defaultPageSize: 25,
        hideOnSinglePage: true,
        showSizeChanger: true,
      }}
      columns={[
        ...columns,
        {
          title: "Action",
          key: "action",
          render: (_, record, index) => (
            <Space
              onClick={() => {
                handleEdit((page - 1) * paginationSize + index);
                console.log("record", record);
              }}
              size="middle"
            >
              <a>Edit</a>
            </Space>
          ),
        },
      ]}
    />
  );
};

export { Table };
