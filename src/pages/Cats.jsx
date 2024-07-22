import {useEffect, useState} from "react";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {cats} from "../data/cats";

const columns = {
  name: "Nome",
  breed: "Raça",
  entryDate: "Data De Entrada",
  departureDate: "Data De Saída",
  status: "Status",
};

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
      <Table columns={columns} data={formatedData} hasActions={true} />
    </>
  );
}

export default Cats;
