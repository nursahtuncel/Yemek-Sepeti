import { LoaderCircle } from 'lucide-react';
import React from 'react'

const Loader = ({desing}) => {
  return (
    <div className={`flex items-center justify-center my-20 ${desing}`}>
      <LoaderCircle className='animate-spin text-red-8 00 text-2xl'/>
    </div>
  )
}

export default Loader;
