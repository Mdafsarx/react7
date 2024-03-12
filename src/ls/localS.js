function getStoredCart(){

let array=[]
const storedCart=localStorage.getItem('card')
if(storedCart){
    array=JSON.parse(storedCart)
}
return array

}



const savedCard=(cardRec)=>{

localStorage.setItem('card',JSON.stringify(cardRec))


}



function addCard(id){

const card=getStoredCart()
card.push(id);
savedCard(card)

}

function removeCard(id){
    const card=getStoredCart();
    const rem=card.filter(idx => idx !== id);
    savedCard(rem)
}



export {addCard , getStoredCart,removeCard }

