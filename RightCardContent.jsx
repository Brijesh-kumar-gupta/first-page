import React from 'react'

const RightCardContent = (props) => {
  console.log(props.color);
  return (
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
     <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center item-center'>{props.id+1}</h2>
     <div>
        <p className='text-shadow-2xs text-xl leading-relaxed text-gray mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio praesentium dicta laborum nisi!</p>
     </div>
     <div className='flex justify-between'>
      <button style={{backgroundcolor:props.color}} className='bg-blue-600 text-white p-8 font-medium px-8 py-2 rounded-full'>{props.tag}</button>
      <button><i className="ri-arrow-right-up-fill"></i></button>
      </div>
      </div>
  )
}

export default RightCardContent
