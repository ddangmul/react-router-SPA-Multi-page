import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return <EventForm />;
}

export async function action({ request, params }) {
  // 새 이벤트 생성 시 파라미터 없음

  const data = await request.formData();

  const eventData = {
    title: data.get("title"), // 폼 요소 name명과 일치
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event." }), {
      status: 500,
    });
  }

  return redirect("/events"); // 사용자를 다른 페이지로 리디렉션
}
