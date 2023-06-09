import axios from "axios";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import { AppContext } from "@/context/AppContext";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "./../firebase/config";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
  }
  return config;
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <AppContext>
      <div className="flex flex-col overflow-auto">
        <div className="h-navbar w-full fixed top-0 z-20 bg-white shadow">
          <Navbar />
        </div>
        <div className="mt-[112px] mb-[64px] md:mb-0 lg:h-full">
          <Component {...pageProps} />
          <Footer />
          <div className="fixed w-full bottom-0 md:hidden z-20">
            <NavMobile />
          </div>
        </div>
      </div>
    </AppContext>
  );
}
