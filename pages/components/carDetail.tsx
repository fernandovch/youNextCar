import React from 'react'

import styles from "./../../styles/CarType.module.css";


interface IPropsCar {
  
  manufacturer: string;
  model: string;
  year: number;
  vin: string;
}

const  CarDetail : React.FC< IPropsCar[]> = ( cars : IPropsCar[]) =>  {
 
  

    const elements :any = []
      for(var car of cars){
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
        </div>
      )
      

   


};

export default CarDetail;
