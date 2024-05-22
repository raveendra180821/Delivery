import React, {useContext} from 'react'

import './displayFoodItems.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/foodItem'

const DisplayFoodItems = ({category}) => {

    const {food_list} = useContext(StoreContext)

    return(
        <div className='food-items-container'>
            <h1>{category!=="All" ? category : "Top dishes near you"}</h1>
            <div className='food-items-list'>
                {food_list.map( (item, index) => {
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} item = {item}/>
                    }
                    return ''
                  }
                )}
            </div>
            
        </div>
    )
}

export default DisplayFoodItems