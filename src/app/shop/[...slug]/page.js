import React from 'react'

function ShopDetails({ params:{slug}}) {

  return (

    slug.length==1?
    <div>ShopDetails{slug}</div>
    :
    <h2>hello</h2>
  )
}

export default ShopDetails