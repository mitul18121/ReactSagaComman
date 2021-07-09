import React, { useEffect } from "react";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import Images from "../images/email.png";
import { otpReducer } from "../store/VerifyOtp/reducer";
import { useSelector, useDispatch } from "react-redux";
import { selectOtp } from "../store/VerifyOtp/selector";
import { otpForm, otpRequest } from "../store/VerifyOtp/action";
import { CommanReducer } from "../store/commoan/reducer";
import { selectMessage } from "../store/commoan/slector";
import toast from "react-hot-toast";
import { verifyOypSaga } from "../store/VerifyOtp/saga";

const VerifyOtp = () => {
  useInjectReducer({ key: "otp", reducer: otpReducer });
  useInjectReducer({ key: "commanMessage", reducer: CommanReducer });
  useInjectSaga({ key: "verifyOypSaga", saga: verifyOypSaga });
  const { VCode } = useSelector(selectOtp);
  const { message, type } = useSelector(selectMessage);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    console.log(VCode);
    event.preventDefault();
    dispatch(otpRequest({ VCode: VCode }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(otpForm({ attr: [name], value }));
  };

  useEffect(() => {
    console.log(type, message);
    if (message !== "") {
      toast[type](message, {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return () => toast.remove();
    }
  });
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:py-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-20 w-auto" src={Images} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
              Verify your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Enter verification code
                </label>
                <input
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="VCodee"
                  type="number"
                  name="VCode"
                  autoComplete="VCode"
                  value={VCode}
                  onChange={handleChange}
                  required
                  placeholder="Enter a verification code"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </span>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
