import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // loader가 리턴한 Promise에서 리졸빙된 최종 데이터 반환
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// loader 코드는 클라이언트측 코드. 서버가 아닌 브라우저에서 실행됨
export async function loader() {
  // 응답 객체를 loader가 반환
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
}
