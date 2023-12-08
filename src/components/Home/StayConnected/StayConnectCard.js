import Image from 'next/image'
import React from 'react'

const StayConnectCard = ({ bkg, image, number }) => {
  return (
    <div>
     <div className={`bg-${bkg}`}>
            <div className="overlap-group-12 flex text-center items-center px-3 gap-3">
              <Image
                className="frame-8"
                width={500}
                height={500}
                alt="Frame"
                src={image}
              />
              <div>
              <div className="text-wrapper-63">{number}</div>
              <div className="text-wrapper-64">پیروکار</div>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default StayConnectCard
