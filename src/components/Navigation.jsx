import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
        <Link  to="/FavoriteBookPage"> My Favorite Books</Link>
      </li>

     
    </nav>
  );
}
