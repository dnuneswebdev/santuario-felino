import {useSelector} from "react-redux";

function Stats({stats}) {
  const theme = useSelector((state) => state.userState.theme);

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow ">
      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Adotados 😻</div>
        <div className="stat-value text-secondary">31</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Prontos Para Adotar 😸</div>
        <div className="stat-value text-secondary">5</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Felinos Na Enfermaria 😿</div>
        <div className="stat-value text-secondary">2</div>
      </div>

      <div
        className={`stat ${theme === "cupcake" ? "bg-white" : "bg-base-200"}`}
      >
        <div className="text-xl">Total De Funcionários 🙂</div>
        <div className="stat-value text-secondary">12</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
}

export default Stats;
