

// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

export default function Item({ name, setFavorita }) {


    return (
      <>
          <li
          onClick={() => {
            setFavorita(name);
          }}
        >
         {name}</li>

      </>
    );
  }
  