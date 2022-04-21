import { useRouter } from "next/router";

import Head from "next/head";
import styles from "./../../styles/CarType.module.css";
import CarDetail from "../components/carDetail";
import SelectDropDown from "../components/Dropdown";
import Option from "react-select/dist/declarations/src/components/Option";

interface IPropsCar {
  props: {
    manufacturer: string;
    model: string;
    year: number;
    vin: string;
  }[];
}

interface Option {
  value: string;
  label: string;
}

interface ISelector {
  options: Option[];
}

const CarType = ({ props }: IPropsCar) => {
  const router = useRouter();
  const typeOfCar = router.query.carType;

  let manufacturer: Option[] = [];
  const dataManufacturer: any = props;

  let myMap = new Map<string, string>();

  for (var carManufacturer of dataManufacturer.cars) {
    if (myMap.get(carManufacturer.manufacturer)) continue;
    myMap.set(carManufacturer.manufacturer, carManufacturer.manufacturer);
    let option: Option = {
      value: carManufacturer.manufacturer,
      label: carManufacturer.manufacturer,
    };
    manufacturer.push(option);
  }

  const selectOptions: ISelector = { options: manufacturer };

  const toggleClickHandler = (event: Option) => {
    console.log(event);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Next Car</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>This is the {typeOfCar} section.</h4>

        <SelectDropDown {...selectOptions}></SelectDropDown>

        <CarDetail {...props}></CarDetail>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Valchax
        </a>
      </footer>
    </div>
  );
};

CarType.getInitialProps = async (ctx) => {
  
    let headers = new Headers({
      "Access-Control-Allow-Origin": "http://fake-vehicles-api.herokuapp.com",
      "Content-Type": "multipart/form-data"
    }); 
    const res = await fetch("https://fake-vehicles-api.herokuapp.com/api");
    const json = await res.json();
   return { props: { cars: json } };
  



};

export default CarType;
