import "./App.css";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";


//Imagenes de perritos
import imagen1 from "./assets/boyero.jpg";
import imagen2 from "./assets/landseer.jpg";
import imagen3 from './assets/terranova.jpg';
import imagen4 from './assets/golden.jpg'

export default function App() {
  return (
    <>
      <Header title="Adopta un Perrito" />
      <CardGroup>

      <MyCard
        img={imagen1}
        name="Toffy"
        descripcion="Esponjocito perrito es de la raza Boyero de Berna que desciende de los Terranova"
        color="success"
        texto="Adoptar"/>
      <MyCard
        img={imagen2}
        name="Alex"
        descripcion="Cachorro que también desciende del Terranova, pero esta raza es llamada Landseer. Suelen ser muy amistosos con la familia"
        color="primary"
        texto="Adoptar"/>
      <MyCard
        img={imagen3}
        name="Sam"
        descripcion="Sam es de la raza Terranova y es muy amistoso y protectos con la familia. Recomendado para niños"
        color="warning"
        texto="Adoptar"/>
      <MyCard
        img={imagen4}
        name="Ricardo"
        descripcion="Precioso Golden Retriever especial para aquellas personas que se sienten solos, ya que esta raza de perros es muy jugueton y travieso"
        color="danger"
        texto="Adoptar"/>

      </CardGroup>

      <Footer futer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños
      , todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu pelo compañero para siempre."
      />
    </>

  );
}
