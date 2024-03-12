import { useEffect } from "react";
import { useState } from "react";
import BottleCard from "../bottleCard/bottleCard";
import './bottle.css'
import { addCard, getStoredCart, removeCard } from "../ls/localS";
import Card from "../card/card";

const Bottle = () => {

// useState means data store
const [bottles,setBottles]=useState([]);



useEffect(()=>{
    fetch('data.json').then(res=>res.json()).then(data=>setBottles(data))
},[])


// buy bottle store in state
const [buyBottle,setBuyBottle]=useState([])



// cart count dave and show on local storage
useEffect(()=>{

   if(bottles.length>0){
    const storedCart=getStoredCart()

    const savedCard=[]
for(const id of storedCart){
    
const findTheBottle=bottles.find(bottle=> bottle.id == id)
if(findTheBottle){
savedCard.push(findTheBottle)
}

}
setBuyBottle(savedCard)
}

},[bottles])



// buy button pas to bottom
const handleButton=(bottle)=>{
    const newBuyBottle=[...buyBottle,bottle]
    setBuyBottle(newBuyBottle);
    addCard(bottle.id);

}

// for delate buy button 

function handleremoveCart(id){
    removeCard(id)
const remain=buyBottle.filter(bottle=>bottle.id !== id);
setBuyBottle(remain)
}


    return (
        <div>
            <h2>Bottle:{bottles.length}</h2>

{/* buy bottle count here */}
<Card buyCard={buyBottle} handleremoveCart={handleremoveCart}/>



<div className="bottle">
{
    bottles.map((bottle,index)=>{
        return <BottleCard key={index} bottle={bottle}  handleButton={handleButton} ></BottleCard>
    })
}
</div>

        </div>
    );
};

export default Bottle;