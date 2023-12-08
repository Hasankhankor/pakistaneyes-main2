import Image from "next/image"


const LifeStyleCard = ({image,date,title}) => {
  return (
    
      <div className="post-22 flex flex-col md:flex-row gap-4 md:gap-10">
                <img
                  className="image-4 max-w-96 min-w-1/2"
                  src={image}
                   width={150}
                   height={150}
                  alt="Image"
                  
                />
                <div className="md:mt-6 w-auto md:px-auto">
                  <p className="craig-bator-dec-11">
                    <span className="text-wrapper-44">&nbsp;</span>
                    <span className="text-wrapper-45">{date}</span>
                  </p>
                  <p className="text-wrapper-70 md:mt-6 leading-10">{title}  </p>
                </div>
              
    </div>
  )
}

export default LifeStyleCard
