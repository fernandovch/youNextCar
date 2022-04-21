import type { NextPage } from 'next'
import { Fragment } from 'react';

const carDetail  = ({props})=> {
    console.log(props)
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
    const res = await fetch("http://localhost:3000/api")
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

export default carDetail;