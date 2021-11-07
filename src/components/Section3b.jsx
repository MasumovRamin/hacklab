import "./Section3b.scss";
import { useState } from "react";

import image2 from "../assets/loqoch.png";
import image4 from "../assets/loqome.png";
import image1 from "../assets/loqomi.png";
import image3 from "../assets/loqoas.png";

export default function Section3b() {
  const [t, setT] = useState({
    text: (
      <>
        Сəmiyyətimizdən çıxan bir çox layihələr vardır. Bu layihələr Sənaye 4.0
        sektoruna aiddirlər. Layihələr icra planına görə 3 kateqoriyaya bölünür.
        Aktiv layihələrimiz, prosesdə - hazırlıq mərhələsində olan layihələr və
        gələcək üçün planlaşdırılan layihələr. Aşağıda qeyd olunan layihələr
        aktiv layihələrimiz sırasına daxildir. Prossesdə olan və gələcək
        layihələrimiz isə, hidroloji sistemin qurulması, mikrokontroller
        istehsalı, kripto ATM-lərin qurulması, yerli kriptovalyuta birjasının
        hazırlanması və digər layihələrdir. Layihələrə qoşulmaq, həmçinin öz
        töhvənizi vermək istədiyiniz təqdirdə, cəmiyyətimizə üzvlük üçün
        müraciət edə bilər və uyğun olduğunuz təqdirdə üzv seçildikdən sonra
        daha ətraflı tanış ola bilərsiniz.
      </>
    )
  });
  return (
    <div className="Section3b">
      <div className="div12">
        <div className="center">
          <div className="left">Layihələr</div>
          <div className="right"> {t.text} </div>
        </div>
      </div>
      <div className="loqos">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </div>
  );
}
