import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail"); // 인수: 라우트에 지정한 id

  console.log(data);

  // if (!data) {
  //   return <p>로딩 중...</p>; // 로딩 중 상태 처리
  // }

  // if (!data || !data.event) {
  //   return <p>에러: 이벤트 정보를 찾을 수 없습니다.</p>;
  // }

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const { eventId } = params;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
      }
    );
  } else {
    const eventData = await response.json();
    console.log("API 응답: ", eventData);
    return eventData;
  }
}
