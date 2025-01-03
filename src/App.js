import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDatail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

// 라우터 정의
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // pages 컴포넌트들의 래퍼 역할
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index - 부모 라우트가 활성인 경우 로딩되어야 하는 기본 라우트
      { path: "products", element: <ProductsPage /> },
      // : - 역동적 경로 파라미터
      { path: "products/:productId", element: <ProductDatail /> },
    ],
  },
]);

function App() {
  // 라우터 사용
  return <RouterProvider router={router} />;
}

export default App;
