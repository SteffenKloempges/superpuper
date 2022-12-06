import { useState, useEffect } from "react";

const Shoplist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return <section></section>;
};

export default Shoplist;
