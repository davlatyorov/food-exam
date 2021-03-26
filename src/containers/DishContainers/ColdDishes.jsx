import { coldDishes } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import { useState } from "react";
import UseModal from "../../components/UseModal";

const ColdDishes = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="dishes-wrapper">
      <ItemAdderBtn setVisible={setVisible} />
      <UseModal setVisible={setVisible} visible={visible} />
      {coldDishes.map((item) => (
        <DishCard
          img={item.foodImg}
          price={item.foodPrice}
          text={item.foodName}
          key={item.id}
          set={item.isAvailable}
        />
      ))}
    </div>
  );
};

export default ColdDishes;
