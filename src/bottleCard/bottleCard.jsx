import "./bottleCard.css"


const BottleCard = ({bottle,handleButton}) => {

    const {name,price,img}=bottle
    // console.log(bottle)
    return (
        <div className="bottleCard">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}$</p>
            <button onClick={()=>{handleButton(bottle)}}>Buy</button>
        </div>
    );
};

export default BottleCard;