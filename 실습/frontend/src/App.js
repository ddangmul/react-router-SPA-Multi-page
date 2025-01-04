import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // 하위 라우트 어디에서든 오류가 발생하면 ErrorPage가 실행
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          // {
          //   path: ":eventId",
          //   loader: eventDetailLoader, // 2개 자식 라우트가 데이터를 사용할 수 있도록 -> !! 래퍼 라우트에만 loader 작성 시 Eventdetail에서 useLoaderData가 undefined 반환 !!
          //   children: [
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
            loader: eventDetailLoader,
          },
          // ],
          // },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
