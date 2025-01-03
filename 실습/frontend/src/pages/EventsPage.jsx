import { Link } from "react-router-dom";
export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "p1", title: "Event 1" },
    { id: "p2", title: "Event 2" },
    { id: "p3", title: "Event 3" },
  ];

  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((evt) => (
          <li key={evt.id}>
            <Link to={evt.id}>{evt.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
