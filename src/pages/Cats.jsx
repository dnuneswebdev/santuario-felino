import {useEffect, useState} from "react";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {cats, statusTag, columns, dropdownItems} from "../data/cats";
import Modal from "../components/Modal";
import AddBtn from "../components/AddBtn";
import ViewCat from "../components/ViewCat";
import {useNavigate} from "react-router-dom";

function Cats() {
  const [formatedData, setFormatedData] = useState([]);
  const [cat, setCat] = useState({});
  const navigate = useNavigate();

  useEffect(function () {
    const newData = cats.map((item) => {
      item.departureDate === null
        ? (item.departureDate = "-")
        : item.departureDate;

      return item;
    });

    setFormatedData(newData);
  }, []);

  function handleCatOperations(catData, mode) {
    const operationMode = mode !== undefined ? mode : "add";
    const modal = document.getElementById("modal");

    switch (operationMode) {
      case "view":
        setCat(catData);
        modal.showModal();
        break;
      case "edit":
        return navigate(`/cats/${catData.id}`);
      default:
        return navigate(`/cats/add`);
    }
  }

  return (
    <>
      <SectionTitle title="Felinos" />
      <AddBtn onClickAdd={handleCatOperations} />
      <Table
        columns={columns}
        data={formatedData}
        hasActions={true}
        statusTag={statusTag}
        dropdownItems={dropdownItems}
        handleItemClick={handleCatOperations}
      />
      <Modal title={cat.name}>
        <ViewCat cat={cat} statusTag={statusTag} />
      </Modal>
    </>
  );
}

export default Cats;
