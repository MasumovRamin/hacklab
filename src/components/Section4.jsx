import "./Section4.scss";
import $ from "jquery";

export default function Section4() {
  return (
    <div className="Section4">
      <div className="div1">
        <span>Yeniliklərdən xəbərdar olun </span>
        <input type="text" placeholder="Sizin email adresiniz" />
        <div className="last-li">
          <a href="/" class="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="" width="100%" height="100%" />
            </svg>
            <span className="span-text-abune">ABUNƏ OLMAQ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
