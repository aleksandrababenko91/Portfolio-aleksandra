import SocialIcons from '../../components/shared/SocialIcons/SocialIcons';
import { v4 as uuidv4 } from 'uuid';
import {items} from '../../components/shared/Footer/items';


export default function BusinessCard() {

  return (
    <main style={{ marginTop: "10px",display: "flex", flexDirection: "column", 
      alignItems: "center", justifyContent: "center",}}>
      <div style={{ marginBottom: "20px" }}>
      <div style={{display: "flex", flexDirection: "column", 
        alignItems: "center", justifyContent: "center", width: "300px", 
        height: "fit-content", padding: "80px", gap: "30px",
        backgroundColor: "white"}}>

          {items.map((item) => {
            return <SocialIcons key={uuidv4()}  item={item}/>
          })}
          </div>
        </div>
    </main>
  );
}