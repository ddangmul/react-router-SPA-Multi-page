import { Link } from "react-router-dom";
// 클릭 시 링크가 하이라이트퇴지 않고, 현재 페이지를 떠날 거라서 NavLink가 아닌 Link 사용

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
