import { useState } from 'react';
const share = '/logos/share.png';
function ShareButton({ title, url,date }) {
  const [shareError, setShareError] = useState(null);

 const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url: url,
          date: date,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        setShareError('Error sharing the post.');
      }
    } else {
      setShareError('Sharing is not supported on this device or browser.');
    }
  };
  return (

    <div className="flex justify-between items-center " onClick={handleShareClick}>
         <style jsx>{`
        .share-icon {
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.7;
        }

        .share-icon:hover {
          transform: scale(1.3);
          opacity: 1;
        }
      `}</style>

        <span>
            <img src={share} width={40} height={40} className="share-icon " alt="Share" />
            <p className='text-black-400'> Share This Post </p>
        </span>
        <p className="text-sm mb-2 mx-2">{date}</p>
      {shareError && <p>{shareError}</p>}
    </div>

  );
}

export default ShareButton;
