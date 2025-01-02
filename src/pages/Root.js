// Outlet: 자녀 라우트 요소들이 렌더링되어야 할 장소를 표시
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
