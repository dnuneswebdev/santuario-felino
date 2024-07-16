import {Link, useRouteError} from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <img
            src="/src/assets/cat-error.svg"
            alt="cat-error"
            className="w-48 mx-auto"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Página Não Encontrada!
          </h1>
          <p className="mt-6 text-lg leading-7">
            Desculpe, não conseguimos encontrar a página solicitada.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary rounded-md">
              Voltar para o Início
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center p-16">
      <div className="text-center">
        <img
          src="/src/assets/cat-error.svg"
          alt="cat-error"
          className="w-40 mx-auto"
        />
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-5xl">
          Desculpe, houve um erro com a sua requisição.
        </h1>
        <p className="mt-3 text-lg leading-7">
          Iremos trabalhar para resolver este problema o mais breve possível!
          Por favor, contate o suporte.
        </p>
        <div className="mt-3">
          <Link to="/" className="btn btn-secondary rounded-md">
            Voltar para o Início
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
