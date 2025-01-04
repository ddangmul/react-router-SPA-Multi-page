import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail"); // 인수: 라우트에 지정한 id

  return <EventForm event={data.event} method="patch" />;
}
