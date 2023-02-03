import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Table, Loader, UniversityFormModal } from "../Components";
import { getUniversityList } from "../services/entryService";
import { getDeepCopy, setDataToLocalStorage } from "../services/utils";

const secondTask = () => {
  const [universityList, setUniversityList] = useState([]);
  const [error, setError] = useState("");
  const [isEditModal, setIsEditModal] = useState(false);
  const [focusedData, setFocusedData] = useState({});
  const [index, setIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _universityList = await getUniversityList();
    if (_universityList.length > 0) {
      setUniversityList(_universityList);
    } else {
      setError("No record found");
    }
  };

  const handleEdit = (_index) => {
    setFocusedData({ ...universityList[_index] });
    setIndex(_index);
    setIsEditModal(true);
  };

  const onSubmit = (values) => {
    let valuesCopy = getDeepCopy(universityList);
    valuesCopy[index] = values;
    setUniversityList(valuesCopy);
    setDataToLocalStorage("universities", valuesCopy);
    setIsEditModal(false);
  };

  return (
    <>
      <h1>Universities API</h1>

      {universityList.length > 0 ? (
        <>
          <Table
            data={universityList}
            handleEdit={handleEdit}
            columns={[
              ...Object.keys(universityList[0]).map((key) => ({
                title: key.toUpperCase().replaceAll("_", " "),
                key: key,
                dataIndex: key,
              })),
            ]}
          />
          {isEditModal && (
            <UniversityFormModal
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

export default secondTask;
