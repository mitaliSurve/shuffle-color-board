import React, { useEffect, useState } from "react";
import styles from "./game.module.css";

const myArray = [
  { name: "color", count: 0, color: "orange" },
  { name: "color", count: 1, color: "pink" },
  { name: "color", count: 2, color: "goldenrod" },
  { name: "color", count: 3, color: "palevioletred" },
  { name: "color", count: 4, color: "greenyellow" },
  { name: "color", count: 5, color: "burlywood" },
  { name: "color", count: 6, color: "goldenrod" },
  { name: "color", count: 7, color: "rebeccapurple" },
  { name: "color", count: 8, color: "cyan" },
];

const shuffle = (arra1) => {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
};

const Board = (props) => {
  const [list, setList] = useState(myArray);

  useEffect(() => {
    const mountArray = shuffle(myArray);
    setList(mountArray);
  }, []);

  const handleShuffle = () => {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", myArray, changes);
  };

  return (
    <>
      <div className={styles.container}>
        {list.map((x, index) => (
          <div className={styles.cell} key={index}>
            <div className={styles.h1} style={{ backgroundColor: x.color }}>
              {x.name} - {x.count}
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleShuffle}>
        Shuffle
      </button>
    </>
  );
};

export default Board;
