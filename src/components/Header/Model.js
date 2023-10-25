import React from 'react';
import './Model.css'

const Model = ({title,content,close}) => {
  return (
    <div className='Model'>
        <div className='Model_container'>
          <div className='Model_close' onClick={()=>close(false)}>&times;</div>
                <div className='Model_title'>
                     {title}
                </div>
                <div className='Model_content'>
                     {content}
                </div>
                <div className='Model_footer'>
                      <button className='btn' onClick={()=>close(false)} >{close} Close</button>
                </div>
        </div>
    </div>
  )
}

export default Model