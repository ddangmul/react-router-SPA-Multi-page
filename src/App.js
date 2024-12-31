import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// 라우트 정의
const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
