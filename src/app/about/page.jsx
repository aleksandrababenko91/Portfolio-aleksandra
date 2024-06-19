import HeroCard from '../../components/HeroSection/HeroCard';
import { items } from '../../components/HeroSection/items';
import { v4 as uuidv4 } from 'uuid';


export default function About() {

  return (
    <main style={{ marginTop: "120px" }}>
      <div style={{ marginBottom: "20px", alignItems: "center", display: "flex", alignItems: "center", justifyContent:"center" }}>
        {items.map((item) => {
          return <HeroCard key={uuidv4()} item={item} />;
        })}
      </div>

    </main>
  );
}