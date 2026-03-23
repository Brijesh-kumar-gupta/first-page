import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props);
  return (
    <div className='py-10 flex items-center  h-full  px-18'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
