import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  const navigation = useNavigation(); // navigation 객체 반환

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
