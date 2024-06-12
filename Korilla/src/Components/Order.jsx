import Topping from './Topping'

export default function Order (props) {
    // console.log(props.order.toppings[0])
    // const thing = ""
    return (
      
      <div className="Order">
        <h3>{props.order.main}</h3>
            <li>Meat: {props.order.protein}</li>
            <li>Rice type: {props.order.rice}</li>
            <li>Sauce: {props.order.sauce}</li>
            <li>Drink: {props.order.drink}</li>
            <li>Price: {props.order.cost}</li>
            { (props.order.toppings) 
            ? (props.order.toppings.map((topping, index) => 
                <Topping 
                key = {index} 
                id = {index} 
                topping = {topping} 
                /> )) 
            : null }
            { (props.order.isVegetarian) ? <p className='logo'>🌱</p> : <p className='logo'>🍖</p> }
      </div>
    )
  }