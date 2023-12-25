import React from "react";
import EggTypes from "./EggTypes";
import MilkTypes from "./MilkTypes";
import AnimalTypes from "./AnimalTypes.js";
import "./UserPage.scss";
const UserPage = () => (
  <div className="user">
    <h2>Xoş gəlmisən</h2>
    <h3>Öz fermanı yaratmaq üçün müəyyən məlumatlarla tanış ol...</h3>
    <br />
    <p>
      Yumurta bölümündə sizə 3 cür yumurta seçimi təqdim olunur: 1) Toyuq,
      2)Qaz, 3) Ördək
    </p>
    <EggTypes />
    <br />
    <hr />
    <br />
    <br />
    <br />
    <p>
      Süd bölümündə sizə heyvan növünə görə 3 cür süd seçimi təqdim olunur: 1)
      İnək , 2)Keçi , 3)Qoyun
    </p>
    <MilkTypes />
    <br />
    <hr />
    <br />
    <br />
    <p>
      Burada isə siz fermanızda görmək istədiyiniz müəyyən heyvanların sayını
      seçə bilərsiz:
    </p>
    <br />
    <br />
    <AnimalTypes />
  </div>
);

export default UserPage;
