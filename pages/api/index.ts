// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface IPropsCar {
    
      manufacturer: string;
      model: string;
      year: number;
      vin: string;
 }[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPropsCar>
  ) {

    const request:IPropsCar = fetch("https://fake-vehicles-api.herokuapp.com/api");
    
        
    res.status(200).send( request )
  }
  