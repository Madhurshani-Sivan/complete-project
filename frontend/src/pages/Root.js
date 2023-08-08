import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  /* const events = useLoaderData();
  console.log(events); */ //CANT USE LOADER DATA IN UPPER LEVEL PATHS - UNDEFINED

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
