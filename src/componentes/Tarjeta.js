import Item from "./Item";

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

// CONSIGNAS EN TARJETA:
// 1- importar Item CHECK
// 2- utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩 CHECK
// 3- cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma



export default function Tarjeta({setFavorita}) {

  return (
    <ul>
      {listadoPlataformas.map((item, i) => (
        <Item key={i} name={item} setFavorita={setFavorita} />

      ))}
    </ul>
  );
}
