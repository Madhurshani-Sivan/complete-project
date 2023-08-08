import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  /* const events = useLoaderData();
  console.log(events); */ //CANT USE LOADER DATA IN UPPER LEVEL PATHS - UNDEFINED

  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
