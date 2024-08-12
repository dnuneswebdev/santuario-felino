import {useState} from "react";
import {statusTag, columns, dropdownItems} from "../data/cats";
import {useNavigate} from "react-router-dom";
import {useGetCats} from "../hooks/cats/useGetCats";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import Modal from "../components/Modal";
import AddBtn from "../components/AddBtn";
import ViewCat from "../components/ViewCat";
import Loading from "../components/Loading";

function Cats() {
  const {isPending, cats} = useGetCats();
  const [cat, setCat] = useState({});
  const navigate = useNavigate();

  if (isPending) return <Loading />;

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
        data={cats}
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
