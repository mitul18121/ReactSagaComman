import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { changeForm, loginRequest } from "../store/Login/action";
import { loginReducer } from "../store/Login/reducer";
import { loginUserSaga } from "../store/Login/saga";
import { selectLogin } from "../store/Login/selector";
import toast from "react-hot-toast";
import { selectMessage } from "../store/commoan/slector";
import { CommanReducer } from "../store/commoan/reducer";
import { commanReducerCleanMessage } from "../store/commoan/action";

const Login = () => {
  const { email, password, statusType } = useSelector(selectLogin);
  const { message, type } = useSelector(selectMessage);
  useInjectReducer({ key: "auth", reducer: loginReducer });
  useInjectReducer({ key: "commanMessage", reducer: CommanReducer });
  useInjectSaga({ key: "loginUserSaga", saga: loginUserSaga });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeForm({ attr: [name], value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    dispatch(loginRequest({ Email: email, Password: password }));
    console.log("message", message);
    console.log(`statusType`, statusType);
  };

  useEffect(() => {
    console.log(type, message);
    if (message !== "") {
      toast[type](message, {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return () => {
        dispatch(commanReducerCleanMessage());
        toast.remove();
      };
    }
  }, [type, message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:py-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Password
              </label>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="password"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't Have Account?
              </Link>
            </div>

            <div className="text-sm">
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
