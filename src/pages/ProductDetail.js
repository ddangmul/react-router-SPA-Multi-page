import { Link, useParams } from "react-router-dom";

export default function ProductDatail() {
  const params = useParams(); // 라우트 정의에서 프로퍼티로 정의한 역동적 경로 파라미터를 담은 객체 반환

  return (
    <main>
      <h1> Product Detail</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </main>
  );
}
