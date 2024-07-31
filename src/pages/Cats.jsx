import {useEffect, useState} from "react";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {cats, statusTag, columns, dropdownItems} from "../data/cats";
import Modal from "../components/Modal";
import CatView from "../components/CatView";

function Cats() {
  const [formatedData, setFormatedData] = useState([]);
  const [cat, setCat] = useState({});

  useEffect(function () {
    const newData = cats.map((item) => {
      item.departureDate === null
        ? (item.departureDate = "-")
        : item.departureDate;

      return item;
    });

    setFormatedData(newData);
  }, []);

  function handleCatOperations(catData) {
    const modal = document.getElementById("modal");

    setCat(catData);
    modal.showModal();
  }

  return (
    <>
      <SectionTitle title="Felinos" />
      <Table
        columns={columns}
        data={formatedData}
        hasActions={true}
        statusTag={statusTag}
        dropdownItems={dropdownItems}
        handleItemClick={handleCatOperations}
      />
      <Modal title={cat.name}>
        <CatView cat={cat} statusTag={statusTag} />
      </Modal>
    </>
  );
}

export default Cats;
