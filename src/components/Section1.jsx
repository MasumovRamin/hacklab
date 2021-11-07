import "./Section1.scss";
import Navbar from "./Navbar";

export default function Section1() {
  return (
    <div className="Section1">
      <Navbar />
      <div className="write">
      <span>
        Fikirlər, yalnız fikir olaraq heçnəyi dəyişməyə qadir deyil. Hacklab,
        fikirlərinizin dünyanı dəyişə biləcəyi və gələcəyin qurulmasında rol ala
        biləcəyiniz texnoloji reallığa açılan qapı olacaqdır.
        </span>
      </div>
      <div class="gif">
        <img src="https://i.ibb.co/tPBnk9P/qafqaz.gif" alt="" />
      </div>
    </div>
  );
}
