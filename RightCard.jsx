import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full Shrink-o overflow-hidden relative  w-90  rounded-2xl'>
    <img className="w-100 h-full object-cover" src={props.img} alt="" />
    <RightCardContent id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
