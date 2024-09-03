import {useSelector} from "react-redux";

function Stats({catStats, employeeStats}) {
  const theme = useSelector((state) => state.userState.theme);
  const {totalAdopted, readyToAdopt, sickCats} = catStats;

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow ">
      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Adotados 😻</div>
        <div className="stat-value text-secondary">{totalAdopted}</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Prontos Para Adotar 😸</div>
        <div className="stat-value text-secondary">{readyToAdopt}</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Na Enfermaria 😿</div>
        <div className="stat-value text-secondary">{sickCats}</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Total De Funcionários 🙂</div>
        <div className="stat-value text-secondary">{employeeStats}</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
}

export default Stats;
