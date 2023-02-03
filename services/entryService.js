import { getDataFromLocalStorage, setDataToLocalStorage } from "./utils";

const API1 = "https://api.publicapis.org/entries";
const API2 = "http://universities.hipolabs.com/search?country=pakistan";

export const getEntries = async () => {
  try {
    let entries = getDataFromLocalStorage("entries");
    if (!entries) {
      const data = await getDataFromAPI(API1);
      setDataToLocalStorage("entries", data?.entries);
      entries = data?.entries || [];
    }
    return entries;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUniversityList = async () => {
  try {
    let universities = getDataFromLocalStorage("universities");
    if (!universities) {
      universities = await getDataFromAPI(API2);
    }
    setDataToLocalStorage("universities", universities);
    return universities;
  } catch (error) {
    console.log("error", error);
  }
};

export const getDataFromAPI = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
