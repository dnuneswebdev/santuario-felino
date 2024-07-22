import {useEffect, useState} from "react";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {cats, statusTag, columns} from "../data/cats";

function Cats() {
  const [formatedData, setFormatedData] = useState([]);

  useEffect(function () {
    const newData = cats.map((item) => {
      item.departureDate === null
        ? (item.departureDate = "-")
        : item.departureDate;

      return item;
    });

    setFormatedData(newData);
  }, []);

  return (
    <>
      <SectionTitle title="Felinos" />
      <Table
        columns={columns}
        data={formatedData}
        hasActions={true}
        statusTag={statusTag}
      />
    </>
  );
}

export default Cats;
