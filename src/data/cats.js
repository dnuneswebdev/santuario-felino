export const cats = [
  {
    id: 1,
    name: "Fullon",
    breed: "Indefinida",
    entryDate: "01/09/2021",
    departureDate: "21/12/2022",
    fiv: false,
    felv: false,
    color: "Branco",
    age: 3,
    weight: 7.5,
    image: "/src/assets/fullon.jpg",
    description: "Chegou na ONG por caso de acumulação.",
    healthComments:
      "05/09/2021-Internado para tratamento de esporitricose. 08/09/2021-Recuperando em isolamento. 20/09/2021-Está curado e recebeu alta.",
    vacinated: true,
    microchipNumber: 6921506,
    status: "Adotado",
  },
  {
    id: 2,
    name: "Gaia",
    breed: "Indefinida",
    entryDate: "05/12/2021",
    departureDate: "23/07/2023",
    fiv: false,
    felv: false,
    color: "Chocolate",
    age: 3,
    weight: 4,
    image: "/src/assets/gaia.jpg",
    description: "Chegou na ONG por caso de acumulação.",
    healthComments: "",
    vacinated: true,
    microchipNumber: 3025480,
    status: "Adotado",
  },
  {
    id: 3,
    name: "Pesto",
    breed: "Indefinida",
    entryDate: "13/04/2020",
    departureDate: null,
    fiv: true,
    felv: true,
    color: "Preto",
    age: 4,
    weight: 3,
    image: "/src/assets/pesto.jpg",
    description: "Chegou na ONG por caso de acumulação.",
    healthComments: "",
    vacinated: true,
    microchipNumber: 6954783,
    status: "Pronto Para Adoção",
  },
  {
    id: 4,
    name: "Luigi",
    breed: "Indefinida",
    entryDate: "07/04/2021",
    departureDate: null,
    fiv: false,
    felv: true,
    color: "preto",
    age: 5,
    weight: 3.5,
    image: "/src/assets/pesto.jpg",
    description: "Chegou na ONG por caso de acumulação.",
    healthComments: "",
    vacinated: true,
    microchipNumber: 9654282,
    status: "Enfermo",
  },
  {
    id: 5,
    name: "Lua",
    breed: "Indefinida",
    entryDate: "24/08/2019",
    departureDate: null,
    fiv: true,
    felv: false,
    color: "cinza",
    age: 6,
    weight: 2.5,
    image: "/src/assets/gaia.jpg",
    description: "Chegou na ONG por caso de acumulação.",
    healthComments: "",
    vacinated: true,
    microchipNumber: 3259741,
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

export const dropdownItems = [
  {
    item: "Visualizar",
    value: "view",
  },
  {
    item: "Editar",
    value: "edit",
  },
];

export const filter = {
  field: "Nome",
  value: "name",
};

export const sort = [
  {
    label: "Status a-Z",
    value: "status-asc",
  },
  {
    label: "Status Z-a",
    value: "status-desc",
  },
];
