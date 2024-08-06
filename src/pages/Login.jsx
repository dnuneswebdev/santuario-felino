import {useForm} from "react-hook-form";
import {useLogin} from "../hooks/useLogin";
import {ImSpinner9} from "react-icons/im";
import {useSelector} from "react-redux";

function Login() {
  const theme = useSelector((state) => state.userState.theme);
  const {isPending, login} = useLogin();
  const {
    register,
    handleSubmit,
    formState: {isValid},
    reset,
  } = useForm();

  function onLogin(formValues) {
    const {email, password} = formValues;

    login(
      {email, password},
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center login">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`card lg:w-96 w-80 shadow-lg ${
            theme === "cupcake" ? "bg-white" : "bg-base-200"
          }`}
        >
          <img
            className="w-60 lg:w-72 mx-auto mt-6"
            src={`${
              theme === "cupcake"
                ? "/src/assets/cat-logo-light.png"
                : "/src/assets/cat-logo-dark.png"
            }`}
            alt="Santuário Felino"
          />
          <div className="card-body gap-0 pt-4">
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-4" onSubmit={handleSubmit(onLogin)}>
                <div>
                  <label className="block font-medium leading-6">Email</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      defaultValue="admin@example.com"
                      className={`block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-base-300 focus:ring-1 sm:leading-6 ${
                        theme === "cupcake" ? "bg-white" : "bg-base-300"
                      }`}
                      {...register("email", {required: true})}
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
                      className={`block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-base-300 focus:ring-1 sm:leading-6 ${
                        theme === "cupcake" ? "bg-white" : "bg-base-300"
                      }`}
                      {...register("password", {required: true})}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block rounded-md  text-lg font-semibold shadow-sm capitalize text-white"
                    disabled={!isValid || isPending}
                  >
                    {!isPending ? "Entrar" : <ImSpinner9 className="spinner" />}
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
