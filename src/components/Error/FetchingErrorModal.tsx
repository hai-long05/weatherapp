import { useState } from 'react';
import Modal from 'react-modal';

const FetchingErrorModal = () => {

  const [modelIsOpen, setModelIsOpen] = useState<boolean>(true)

  return (
    <Modal isOpen={modelIsOpen}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              border: "aqua",
              borderRadius: "10px",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '162px'
            },
          }}
    >
      <div className='bg-[#202b3b] w-96 h-56 p-4 flex flex-col items-center rounded-lg border-2 border-red-700 text-red-700'>
        <p className='text-2xl font-bold pb-10'>Fetching error</p>
        <p>Something unexpected happened. We're unable to fetch the data, please reload the page and try again.</p>
        <div className='flex justify-end items-end h-full w-full text-[#f1f0f0]'>
          <button className='w-[70px] border rounded-lg' 
                  onClick={() => setModelIsOpen(false)}>Cancel</button>
          <button className='ml-3 btn w-[70px] border border-red-700 bg-[#B91C1C] rounded-lg'
                  onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    </Modal>
  )
}

export default FetchingErrorModal