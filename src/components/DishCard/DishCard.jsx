import { EditIcon } from "../../assets/icon/BaseIcons"

const DishCard = ({img,text,price,set}) => {
    return (
      <div className="dish-card">
        <img src={img} alt="" />
        <h3 className="title">{text}</h3>
        <p className="dish-info">
          {price} - {set}
        </p>
        <button className="dish-button">
          <EditIcon />
          Edit dish
        </button>
      </div>
    );
}

export default DishCard;
