import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router , {useRouter}  from 'next/router';


interface ISelector{
    options: Option[],
    
}

interface ToggleProps {
    ClickHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

  type Option ={
    value:string
    label: string
  }

const SelectDropDown = ({options}:ISelector,  onChangedEvent:Event) => (
  

  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ options } onChange={ (event)=>{Router.push('/cars/used?man='+event?.value)}  } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);


export default SelectDropDown;