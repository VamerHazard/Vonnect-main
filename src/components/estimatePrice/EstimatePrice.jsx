import React from 'react'
import './estimatePrice.css'

const EstimatePrice = (props) => {
  return (
    <div className='vonnect__estimatePrice-container'>
      <h4>Estimated Price: {Math.ceil(props.companyFee * 1.1 + props.distanceFee)} Rs</h4>
      <div className='vonnect__estimatePrice__calculations'>
        <p>Est. Distance Fee: {props.distanceFee} Rs</p>
        <p>Est. Company Fee: {props.companyFee} Rs</p>
        <p>Est. Tax: 10%</p>
      </div>
    </div>
  )
}

export default EstimatePrice