import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([
    { element: "Element 1", id: Math.random() },
  ]);
  const [index, setIndex] = useState(2);

  const limitDisplay = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      const element = `Element ${index}`;

      setElements((prevElements) => {
        const newElements = [{ element, id: Math.random() }, ...prevElements];
        if (newElements.length > limitDisplay) {
          newElements.splice(limitDisplay);
        }
        return newElements;
      });
      setIndex(index + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [elements]);

  return (
    <div className="container">
      {elements.map((item, index) => (
        <div
          key={item.id}
          className={`element ${
            index === 0 ? "new-element" : "existing-element"
          }`}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default App;
