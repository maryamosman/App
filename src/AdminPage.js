import React from "react";
import AdminNavbar from "./AdminNavbar";
import { FaPerson } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { FaEgg } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";

import "./AdminPage.scss";
import { Button, Card } from "react-bootstrap";

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="top-divs">
        <div className="div-item">
          <GiFarmer />

          <p>23 Fermer</p>
        </div>
        <div className="div-item">
          <FaPerson />
          <p>40 İstifadəçi</p>
        </div>
      </div>
      <div className="bottom-divs">
        <div className="div-item">
          <FaEgg />
          <p>3,000 Yumurta</p>
        </div>
        <div className="div-item">
          <LuMilk />
          <p>4,500 litr Süd</p>
        </div>
      </div>
      <div
        className="cards"
        style={{
          width: "100%",
          padding: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Card style={{ width: "80rem", fontSize: "100px" }}>
          <Card.Img
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/3349/3349798.png"
          />
          <Card.Body>
            <Card.Title>İstifadəçilər</Card.Title>
            <Card.Text>Fermerdən məhsul almağa hazırsınız.</Card.Text>
            <Button variant="primary">Daxil ol</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "80rem", fontSize: "100px" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/worker-icon-vector-male-service-person-building-construction-workman-hardhat-helmet-jacket-glyph-pictogram-symbol-113380788.jpg"
          />
          <Card.Body>
            <Card.Title>İşçilər</Card.Title>
            <Card.Text>
              Kənd təsərrüfatı işləri və imkanları tapın. Təsərrüfat işçiləri
              işləri burada mövcuddur...
            </Card.Text>
            <Button variant="primary">Daxil ol</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "80rem", fontSize: "100px" }}>
          <Card.Img
            variant="top"
            src="https://cdn2.iconfinder.com/data/icons/at-work-1/100/farmer-512.png"
          />
          <Card.Body>
            <Card.Title>Fermerlər</Card.Title>
            <Card.Text>
              Yumurta, süd və digər kənd təsərrüfatl məhsullarınızı sata
              biləcəyiniz platforma
            </Card.Text>
            <Button variant="primary">Daxil ol</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
