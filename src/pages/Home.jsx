import Card from "../components/Card";
import data from "../data/data";
const Home = () => {
  return (
    <section>
      <h1 className="text-center">All Product</h1>
      <article className="grid-1x4">
        <Card products={data} />
      </article>
    </section>
  );
};

export default Home;
