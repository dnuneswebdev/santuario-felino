import {FaChevronCircleRight, FaChevronCircleLeft} from "react-icons/fa";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE} from "../utils/constants";

function Pagination({totalResults}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(totalResults / PAGE_SIZE);

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setParams(prev);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setParams(next);
  }

  function setParams(direction) {
    searchParams.set("page", direction);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-between mt-4">
      <div className="">
        <p>
          Mostrando <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> a{" "}
          <span>
            {currentPage === pageCount ? totalResults : currentPage * PAGE_SIZE}
          </span>{" "}
          - <span>{totalResults}</span> resultados totais
        </p>
      </div>

      <div>
        {currentPage > 1 && (
          <button
            onClick={previousPage}
            className="flex items-center gap-2 justify-center"
          >
            <FaChevronCircleLeft />
            <span>Anterior</span>
          </button>
        )}
        {currentPage < pageCount && (
          <button
            onClick={nextPage}
            className="flex items-center gap-2 justify-center"
          >
            <span>Próxima</span>
            <FaChevronCircleRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
