import { Typography, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Table, Loader, EntriesFormModal } from "../Components";
import { getEntries } from "../services/entryService";
import { getDeepCopy, setDataToLocalStorage } from "../services/utils";

const firstTask = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [isEditModal, setIsEditModal] = useState(false);
  const [focusedData, setFocusedData] = useState({});
  const [index, setIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _entries = await getEntries();
    if (_entries?.length > 0) {
      setEntries(_entries);
    } else {
      setError("No record found");
    }
  };

  const handleEdit = (_index) => {
    setFocusedData({ ...entries[_index] });
    setIndex(_index);
    setIsEditModal(true);
  };

  const onSubmit = (values) => {
    let valuesCopy = getDeepCopy(entries);
    valuesCopy[index] = values;
    setEntries(valuesCopy);
    setDataToLocalStorage("entries", valuesCopy);
    setIsEditModal(false);
  };

  return (
    <>
      <h1>Entries Api</h1>
      {entries.length > 0 ? (
        <>
          <Table
            columns={[
              ...Object.keys(entries[0]).map((key) => ({
                title: key.toUpperCase(),
                key: key,
                dataIndex: key,
                render: (val) => String(val),
              })),
            ]}
            data={entries}
            handleEdit={handleEdit}
          />
          {isEditModal && (
            <EntriesFormModal
              isOpen={isEditModal}
              data={focusedData}
              onSubmit={onSubmit}
              onCancel={() => setIsEditModal(false)}
            />
          )}
        </>
      ) : error === "" ? (
        <Loader />
      ) : (
        <Typography>{error}</Typography>
      )}
    </>
  );
};

export default firstTask;
