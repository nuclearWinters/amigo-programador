import React from "react";
import YouTube from "react-youtube";

const Nosotros = () => {
  const opts = {
    height: "390",
    width: "640"
  };

  return (
    <div>
      <div>Nosotros</div>
      <YouTube videoId="2g811Eo7K8U" opts={opts} />
      <div>
        Hola, soy el amigo programador. Actualmente tengo un trabajo remoto
        (desde casa) de 15 mil dolares anuales, o sea, de 25 mil pesos mexicanos
        mensuales. Esto lo pude lograr con solo 6 meses de experiencia laboral.
      </div>
      <div>
        Estoy convencido de que cualquiera puede conseguir un trabajo como
        programador sin importar su especilización o grado academico, y en menos
        tiempo de lo que me costo a mi.
      </div>
      <div>
        Considero que tener un empleo digno es un derecho y quisiera regresar a
        la comunidad lo que tantas personas me han enseñado en mis largos ratos
        por internet, por lo qué, si logró motivarte y enseñarte a trabajar en
        esta industria, seria una enorme satisfacción.
      </div>
      <div>
        Lo que más me motivo a hacer esta página es enseñar programación de
        manera eficaz mediante personajes animados, eliminar teoría academica
        abstracta, dejar solo el conocimiento aplicable y contando historias de
        mis experiencias como desarrollador de software.
      </div>
      <div>
        Todos los cursos son gratuitos y estan diseñados para personas que nunca
        han programado. Espero que puedas aprovechar la oportunidad para
        covertirte en el amigo programador.
      </div>
    </div>
  );
};

export default Nosotros;
