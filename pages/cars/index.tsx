import type { NextPage } from 'next'
import { Fragment } from 'react';

const carDetail  = ({foods}: any)=> {
    console.log(foods)
    return (
    <Fragment>
        <section>
            <h1>
                Car Name
            </h1>
            <p>
                Car details information
            </p>
        </section>
    </Fragment>)
}

export async function getServerSideProps(context) {
  let searchTerm = context.query.term
    const res = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&api_key=${process.env.API_KEY}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { foods : data.foods }, // will be passed to the page component as props
    }
  }

export default carDetail;