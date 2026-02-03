import { OctagonAlert } from 'lucide-react'
import React from 'react'

const Error = ({message}) => {
  return (
    <div className='text-center my-20 flex flex-col items-center gap-5'>
<OctagonAlert/>
<h1 className='text-lg font-semibold '>Üzgünüz bir sorun oluştu</h1>
<h3 className='text-red-500'>{message}</h3>
    </div>
  )
}

export default Error
