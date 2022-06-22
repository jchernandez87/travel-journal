import "../styles/main.css";
import Card from "./Card";
import data from "../data/data";

function Main() {
  const Cards = data.map(item => <Card item={item} key={item.id} />)

  return (
    <main className="main">
      {Cards}
    </main>
  );
}

export default Main;
