import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // loader가 리턴한 Promise에서 리졸빙된 최종 데이터 반환

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// loader 코드는 클라이언트측 코드. 서버가 아닌 브라우저에서 실행됨 => 브라우저 API 사용 가능, 리액트 훅 사용 불가능
export async function loader() {
  // 응답 객체를 loader가 반환
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // // 리액트 라우터 제공 헬퍼 유틸리티 json() : json 형식 데이터 포함한 Response 객체 생성
    // 리액트 라우터 v6.x 에서만 지원
    // return json(
    //   { message: "Could not fetch events." },
    //   {
    //     status: 500,
    //   }
    // );

    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500, // status 속성 추가 위해 Response 객체 사용
    });
  } else {
    return response;
  }
}
