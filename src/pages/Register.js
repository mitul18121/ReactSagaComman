import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { selectRegister } from "../store/Register/selector";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { registerReducer } from "../store/Register/reducer";
import { changeRegisterForm, registerRequest } from "../store/Register/action";
import { registerUserSaga } from "../store/Register/saga";
import { CommanReducer } from "../store/commoan/reducer";
import { selectMessage } from "../store/commoan/slector";

const Register = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key: "register", reducer: registerReducer });
  useInjectSaga({ key: "registerUserSaga", saga: registerUserSaga });
  useInjectReducer({ key: "commanMessage", reducer: CommanReducer });
  const { Fname, Lname, Password, Email, Phone, successType } =
    useSelector(selectRegister);
  const { message, type } = useSelector(selectMessage);
  useEffect(() => {
    if (message !== "") {
      toast[type](message, {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return () => toast.remove();
    }
  }, [type, message]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeRegisterForm({ attr: [name], value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Fname, Lname, Password, Email, Phone);
    dispatch(
      registerRequest({
        Email: Email,
        Password: Password,
        Fname: Fname,
        Phone: Phone,
        Lname: Lname,
      })
    );
    console.log(successType);
  };

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
            Create a new Account!
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="Fname"
                type="Fname"
                name="Fname"
                autoComplete="Fname"
                placeholder="First Name"
                required
                value={Fname}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="Lname"
                type="Lname"
                name="Lname"
                autoComplete="Lname"
                placeholder="Last Name"
                required
                value={Lname}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="Phone"
                type="number"
                name="Phone"
                autoComplete="Phone"
                placeholder="Phone"
                required
                value={Phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="Email"
                type="Email"
                name="Email"
                autoComplete="Email"
                placeholder="Email Address"
                required
                value={Email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="appearance-none mt-4 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                type="password"
                name="Password"
                autoComplete="Password"
                placeholder="Password"
                required
                value={Password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Allready have Account?
                </Link>
              </div>
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

export default Register;
