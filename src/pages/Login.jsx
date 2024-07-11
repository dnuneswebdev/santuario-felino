function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center login">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className={`card w-96 shadow-lg bg-white`}>
          <img
            className="w-72 mx-auto mt-6"
            src="/src/assets/cat-logo-light.png"
            alt="Santuário Felino"
          />
          <div className="card-body gap-0 pt-4">
            {/* <h2 className="text-center text-2xl font-bold tracking-wide text-base-700">
              Login
            </h2> */}
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-4">
                <div>
                  <label className="block font-medium leading-6">Email</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      defaultValue="admin@example.com"
                      className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-base-300 focus:ring-1 sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block font-medium leading-6 text-base-600">
                      Senha
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-base-300 focus:ring-1 sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block rounded-md  text-lg font-semibold shadow-sm capitalize text-white"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
