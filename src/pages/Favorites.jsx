import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useLibrary} from "../context/LibraryContext";

export default function FavoriteBookPage() {
    const { theme, toggleTheme } = useTheme();
     const { value } =  useLibrary();
   console.log( value);

  return (
 <>
       <div >
           
        <Navigation />
            <h1>My favorite books</h1>
        <h1>{value}</h1>
       </div>
</>
  );
}
