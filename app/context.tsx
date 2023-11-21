"use client";

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

type DataContextType = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  getData: any;
};

const DataContext = React.createContext<DataContextType>({
  data: null,
  setData: () => {},
  getData: () => {},
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const response = await axios.get(
        "https://panel.virtuwed.id/api/wedding?wedding_slug=fajar-tiara&guest_slug=muhammad-agy-nurwicaksono-LwzfkA"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
