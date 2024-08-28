import {useState} from "react";
import {statusTag, columns, dropdownItems, filter, sort} from "../data/cats";
import {useNavigate} from "react-router-dom";
import {useGetCats} from "../hooks/cats/useGetCats";
import {useDispatch} from "react-redux";
import {loadCat} from "../features/cat/catSlice";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import Modal from "../components/Modal";
import AddBtn from "../components/AddBtn";
import ViewCat from "../components/ViewCat";
import Loading from "../components/Loading";
import Filters from "../components/Filters";

function Cats() {
  const {isPending, cats, count} = useGetCats();
  const [cat, setCat] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isPending) return <Loading />;

  function handleCatOperations(catData, mode) {
    const operationMode = mode !== undefined ? mode : "add";
    const viewModal = document.getElementById("viewModal");

    switch (operationMode) {
      case "view":
        setCat(catData);
        viewModal.showModal();
        break;
      case "edit":
        dispatch(loadCat(catData));
        return navigate(`/cats/${catData.id}`);
      default:
        return navigate(`/cats/add`);
    }
  }

  return (
    <>
      <SectionTitle title="Felinos" />
      <AddBtn onClickAdd={handleCatOperations} />
      <Filters filterField={filter} sortFields={sort} />
      <Table
        columns={columns}
        data={cats}
        hasActions={true}
        statusTag={statusTag}
        dropdownItems={dropdownItems}
        handleItemClick={handleCatOperations}
        count={count}
      />
      <Modal title={cat.name} id="viewModal">
        <ViewCat cat={cat} statusTag={statusTag} />
      </Modal>
    </>
  );
}

export default Cats;
