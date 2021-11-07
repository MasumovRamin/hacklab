import "./Section3.scss";
import { useState } from "react";

export default function Section3() {
  const [t, setT] = useState({
    text:
      'Biz, məqsədyönlü tədqiqatçılar üçün və onların yalnız xüsusi dəvət əsasında qəbul edilməsinə dayanan bir cəmiyyətik. Elə bu səbəbdən də, burada əslində "nə" sualı, "kim" sualı kimi qəbul edilir. Bizim üzvlərimiz, bir-birinə meydan oxuyan, bir-birini cəsarətləndirən, ideyalarının formalaşdırılmasında və test edilməsində bir-birinə dəstək olan qurucular, mütəfəkkirlər və sahə mütəxəssislərindən ibarətdir. Biz, yaxşı fikirlərin, çox nadir hallarda təkbaşına ortaya çıxdığını düşünürük. Biz, yeni təklif və fikirlərin inkişaf etdirilməsini dəstəkləyən, təhlükəsiz zona və anti-inkubatoruq.'
  });
  return (
    <div className="Section3">
      <div className="div11">
        <div className="center">
          <div className="left">Biz kimik?</div>
          <div className="right">{t.text}</div>
        </div>
      </div>
    </div>
  );
}
