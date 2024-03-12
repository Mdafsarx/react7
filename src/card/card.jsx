import PropTypes from 'prop-types';


const Card = ({buyCard, handleremoveCart}) => {
    return (
        <div>
            <h3>added :{buyCard.length}</h3>

{
    buyCard.map((bottle,index)=><div key={index}>
        <img style={{width:"100px",margin:"5px"}} src={bottle.img} key={index}></img>
        <button onClick={()=>{handleremoveCart(bottle.id)}}>del</button>
    </div>)
}

        </div>
    );
};

Card.Prototype={
    buyCard: PropTypes.array.isRequired
}


export default Card;