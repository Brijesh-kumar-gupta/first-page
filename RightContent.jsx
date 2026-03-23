import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div className='h-full flex overflow-x-auto flex-nowrap gap-10 p-6  w-3/4'>
        {props.users.map(function(elem,idx){

       return <RightCard key={idx} color={props.color} id={idx} img={elem.img} tag={elem.tag} />        
      })}
    </div>
  )
}

export default RightContent
