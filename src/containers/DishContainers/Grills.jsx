import { grill } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import { useState } from "react";
import UseModal from "../../components/UseModal";


const Grills = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="dishes-wrapper">
      <ItemAdderBtn setVisible={setVisible} />
      <UseModal setVisible={setVisible} visible={visible} />
      {grill.map((item) => (
        <DishCard
          img={item.foodImg}
          text={item.foodName}
          price={item.foodPrice}
          set={item.isAvailable}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Grills
