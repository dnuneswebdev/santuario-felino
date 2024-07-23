export const cats = [
  {
    id: 1,
    name: "Fullon",
    breed: "Indefinida",
    entryDate: "01/09/2021",
    departureDate: "21/12/2022",
    status: "Adotado",
  },
  {
    id: 2,
    name: "Gaia",
    breed: "Indefinida",
    entryDate: "05/12/2021",
    departureDate: "23/07/2023",
    status: "Adotado",
  },
  {
    id: 3,
    name: "Pesto",
    breed: "Indefinida",
    entryDate: "13/04/2020",
    departureDate: null,
    status: "Pronto Para Adoção",
  },
  {
    id: 4,
    name: "Luigi",
    breed: "Indefinida",
    entryDate: "07/04/2021",
    departureDate: null,
    status: "Enfermo",
  },
  {
    id: 5,
    name: "Lua",
    breed: "Indefinida",
    entryDate: "24/08/2019",
    departureDate: null,
    status: "Em Recuperação",
  },
];

export const columns = {
  name: "Nome",
  breed: "Raça",
  entryDate: "Data De Entrada",
  departureDate: "Data De Saída",
  status: "Status",
};

export const statusTag = {
  Adotado: "bg-success",
  "Pronto Para Adoção": "bg-info",
  Enfermo: "bg-error",
  "Em Recuperação": "bg-warning",
};

export const dropdownItems = ["Visualizar", "Editar"];
