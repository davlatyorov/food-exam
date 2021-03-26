
const FoodCard = ({onAdd,foods}) => {
    console.log(onAdd);
    return (
        <div className="foodCard" onClick={()=>onAdd(foods)}>
        <img className='food-img' src={foods.foodImg}/>
        <p className='food-title'>{foods.foodName}</p>
        <p className='food-price'>$ {foods.foodPrice}</p>
        <p className='available'>{foods.isAvailable}</p>
    </div>
    );
};



export default FoodCard;