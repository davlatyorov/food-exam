import { hotDishes } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import UseModal from "../../components/UseModal";
import { useState } from "react";
import {motion} from "framer-motion";
import {container,item} from "./animate";

const HotDishes = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="dishes-wrapper">
      <ItemAdderBtn setVisible={setVisible} />
      <UseModal setVisible={setVisible} visible={visible} />
      {hotDishes.map((item) => (
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
};

export default HotDishes;
