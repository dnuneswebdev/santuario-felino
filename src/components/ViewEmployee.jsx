function ViewEmployee({employee}) {
  return (
    <>
      <div className="flex lg:gap-16 flex-col lg:flex-row text-center lg:text-left">
        <div className="col-span-3">
          <img src={employee.image} className="lg:w-48 lg:h-48 rounded-md" />
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Nome:</h4>
          <p>{employee.name}</p>
          <h4 className="font-bold mt-4">CPF:</h4>
          <p>{employee.nationalID}</p>
          <h4 className="font-bold mt-4">RG:</h4>
          <p>{employee.rg}</p>
          <h4 className="font-bold mt-4">Idade:</h4>
          <p>{employee.age} anos</p>
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Data De Nascimento:</h4>
          <p>{employee.birthDate}</p>
          <h4 className="font-bold mt-4">Data De Entrada:</h4>
          <p>{employee.entryDate}</p>
          <h4 className="font-bold mt-4">Cargo:</h4>
          <p>{employee.role}</p>
        </div>
      </div>
    </>
  );
}

export default ViewEmployee;
