// // AnimalTypes.js
// import React, { useState } from "react";

// const AnimalTypes = () => {
//   const [animalCounts, setAnimalCounts] = useState({
//     cows: 0,
//     goats: 0,
//     sheep: 0,
//     chickens: 0,
//     geese: 0,
//     ducks: 0,
//     donkeys: 0,
//     horses: 0,
//     dogs: 0,
//   });

//   const handleIncrement = (animal) => {
//     setAnimalCounts((prevCounts) => ({
//       ...prevCounts,
//       [animal]: prevCounts[animal] + 1,
//     }));
//   };

//   const handleDecrement = (animal) => {
//     setAnimalCounts((prevCounts) => ({
//       ...prevCounts,
//       [animal]: prevCounts[animal] > 0 ? prevCounts[animal] - 1 : 0,
//     }));
//   };

//   const handleDeleteAll = (animal) => {
//     setAnimalCounts((prevCounts) => ({
//       ...prevCounts,
//       [animal]: 0,
//     }));
//   };

//   const handleIncreaseAll = () => {
//     setAnimalCounts((prevCounts) => {
//       const updatedCounts = {};
//       Object.keys(prevCounts).forEach((animal) => {
//         updatedCounts[animal] = prevCounts[animal] + 1;
//       });
//       return updatedCounts;
//     });
//   };

//   const handleDecreaseAll = () => {
//     setAnimalCounts((prevCounts) => {
//       const updatedCounts = {};
//       Object.keys(prevCounts).forEach((animal) => {
//         updatedCounts[animal] =
//           prevCounts[animal] > 0 ? prevCounts[animal] - 1 : 0;
//       });
//       return updatedCounts;
//     });
//   };

//   return (
//     <div className="animal-types">
//       {Object.keys(animalCounts).map((animal) => (
//         <div key={animal} className="animal-type">
//           <div className="animal-type__title">
//             {animal.charAt(0).toUpperCase() + animal.slice(1)}
//           </div>
//           <div className="animal-type__count">
//             Count: {animalCounts[animal]}
//           </div>
//           <div className="animal-type__buttons">
//             <button onClick={() => handleDecrement(animal)}>
//               -1 {animal.charAt(0).toUpperCase() + animal.slice(1)}
//             </button>
//             <button onClick={() => handleIncrement(animal)}>
//               +1 {animal.charAt(0).toUpperCase() + animal.slice(1)}
//             </button>
//             <button onClick={() => handleDeleteAll(animal)}>Delete All</button>
//           </div>
//         </div>
//       ))}

//       {/* Buttons to increase and decrease all animal types */}
//       <div className="all-buttons">
//         <button onClick={handleDecreaseAll}>Decrease All</button>
//         <button onClick={handleIncreaseAll}>Increase All</button>
//       </div>
//     </div>
//   );
// };

// export default AnimalTypes;
// AnimalTypes.js
import React, { useState } from "react";
import "./AnimalTypes.scss";

const AnimalTypes = () => {
  const [animalCounts, setAnimalCounts] = useState({
    inək: 0,
    keçi: 0,
    qoyun: 0,
    toyuq: 0,
    qaz: 0,
    ördək: 0,
    eşşək: 0,
    at: 0,
    it: 0,
  });

  const handleIncrement = (animal) => {
    setAnimalCounts((prevCounts) => ({
      ...prevCounts,
      [animal]: prevCounts[animal] + 1,
    }));
  };

  const handleDecrement = (animal) => {
    setAnimalCounts((prevCounts) => ({
      ...prevCounts,
      [animal]: prevCounts[animal] > 0 ? prevCounts[animal] - 1 : 0,
    }));
  };

  const handleDeleteAll = (animal) => {
    setAnimalCounts((prevCounts) => ({
      ...prevCounts,
      [animal]: 0,
    }));
  };

  const handleIncreaseAll = () => {
    setAnimalCounts((prevCounts) => {
      const updatedCounts = {};
      Object.keys(prevCounts).forEach((animal) => {
        updatedCounts[animal] = prevCounts[animal] + 1;
      });
      return updatedCounts;
    });
  };

  const handleDecreaseAll = () => {
    setAnimalCounts((prevCounts) => {
      const updatedCounts = {};
      Object.keys(prevCounts).forEach((animal) => {
        updatedCounts[animal] =
          prevCounts[animal] > 0 ? prevCounts[animal] - 1 : 0;
      });
      return updatedCounts;
    });
  };

  const handleClearAll = () => {
    setAnimalCounts({
      inək: 0,
      keçi: 0,
      qoyun: 0,
      toyuq: 0,
      qaz: 0,
      ördək: 0,
      eşşək: 0,
      at: 0,
      it: 0,
    });
  };

  return (
    <div className="animal-types">
      {Object.keys(animalCounts).map((animal) => (
        <div key={animal} className="animal-type">
          <div className="animal-type__title">
            {animal.charAt(0).toUpperCase() + animal.slice(1)}
          </div>
          <div className="animal-type__count">Sayı: {animalCounts[animal]}</div>
          <div className="animal-type__buttons">
            <button onClick={() => handleDecrement(animal)}>
              -1 {animal.charAt(0).toUpperCase() + animal.slice(1)}
            </button>
            <button onClick={() => handleIncrement(animal)}>
              +1 {animal.charAt(0).toUpperCase() + animal.slice(1)}
            </button>
            <button onClick={() => handleDeleteAll(animal)}>
              Hamısını sil
            </button>
          </div>
        </div>
      ))}

      {/* Buttons to increase and decrease all animal types */}
      <div className="all-buttons">
        <button onClick={handleDecreaseAll}>Hər birini azalt</button>
        <button onClick={handleIncreaseAll}>Hər birini artır</button>
        <button onClick={handleClearAll}>Təmizlə</button>
      </div>
    </div>
  );
};

export default AnimalTypes;
