import React, { useEffect, useState } from "react";
import { useInjectReducer } from "redux-injectors";
import Navbar from "../components/Navbar";
import { CommanReducer } from "../store/commoan/reducer";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectMessage } from "../store/commoan/slector";
import SkeletenLoader from "../components/SkeletenLoader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  useInjectReducer({ key: "commanMessage", reducer: CommanReducer });
  const { message, type } = useSelector(selectMessage);
  const auth = localStorage.getItem("token");

  useEffect(() => {
    if (message !== "") {
      toast[type](message, {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return () => toast.remove();
    }
  }, [type, message]);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      {loading && <SkeletenLoader />}
      {!loading && (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Pitchfork Kickstarter Taxidermy
                </h1>
                <div className="h-1 w-20 bg-red-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {auth ? (
                    <button className="mt-2 text-red-500 border-none">
                      Pay for It
                    </button>
                  ) : (
                    <button className="mt-2 text-red-500  border-none">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {auth ? (
                    <button className="mt-2 text-red-500  border-none">
                      Pay for It
                    </button>
                  ) : (
                    <button className="mt-2 text-red-500  border-none">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
