import React from 'react'

import styles from "./../../styles/CarType.module.css";


interface IPropsCar {
  cars:{ 
    manufacturer: string;
  model: string;
  year: number;
  vin: string;}[]
}

class  CarDetail extends React.Component< IPropsCar>  {
 
    
render(){
    const elements :any = []
      for(var car of this.props.cars){
         elements.push( <div id={car.vin} className={styles.card}>
          <p className={styles.title}>Manufacturer: {car.manufacturer}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>vin: {car.vin}</p>
        </div>)

      }
     
      return (
        <div className={styles.grid} >
        {elements}
        </div>)
      
  }
   


};

export default CarDetail;
