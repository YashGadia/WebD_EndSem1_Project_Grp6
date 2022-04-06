
import React from 'react'
import '../../App.css'
import './Gallery.css';
import img1 from '../../images/adventure-1.jpeg'
import img2 from '../../images/adventure-2.jpeg'
import img3 from '../../images/adventure-3.jpeg'
import img4 from '../../images/luxury-1.jpeg'
import img5 from '../../images/luxury-2.jpeg'
import img6 from '../../images/luxury-3.jpeg'
import img7 from '../../images/mistic-1.jpeg'
import img8 from '../../images/mistic-2.jpeg'
import img9 from '../../images/mistic-3.jpeg'
import img10 from '../../images/monuments-1.jpeg'
import img11 from '../../images/monuments-2.jpeg'
import img12 from '../../images/monuments-3.jpeg'
import img13 from '../../images/safari-1.jpeg'
import img14 from '../../images/safari-2.jpeg'
import img15 from '../../images/safari-3.jpeg'

function Gallery() {
  return (
    <>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='title'>
        PICTURE ALBUM
      </div>
      <div className='gallery'>
        <style>{'body { background-color: #070d2b; }'}</style>
        <ul className='Images'>
          <div className='text-1' >
            Adventure
          </div>
          <div className='gallery_line_1'>
              <img src={img1} id='img1' height={350} width={400} style={{ border: '4px solid #970699', borderRadius: '15px'}} /> {" "}
            <img src={img2} id='img2' height={350} width={400} style={{ border: '4px solid #970699', borderRadius: '15px' }} /> {" "}
            <img src={img3} id='img3' height={350} width={400} style={{ border: '4px solid #970699', borderRadius: '15px' }} />
          </div>
          <div className='text-2' >
            Luxury
          </div>
          <div className='gallery_line-2'>
            <img src={img4} id='img4' height={350} width={400} style={{ border: '4px solid black', borderRadius: '15px' }} /> {" "}
            <img src={img5} id='img5' height={350} width={400} style={{ border: '4px solid black', borderRadius: '15px' }} /> {" "}
            <img src={img6} id='img6' height={350} width={400} style={{ border: '4px solid black', borderRadius: '15px' }} />
          </div>
          <div className='text-3' >
            Mystic
          </div>
          <div className='gallery_line-3'>
            <img src={img7} id='img7' height={350} width={400} style={{ border: '4px solid #f0e118', borderRadius: '15px' }} /> {" "}
            <img src={img8} id='img8' height={350} width={400} style={{ border: '4px solid #f0e118', borderRadius: '15px' }} /> {" "}
            <img src={img9} id='img9' height={350} width={400} style={{ border: '4px solid #f0e118', borderRadius: '15px' }} />
          </div>
          <div className='text-4' >
            Monuments
          </div>
          <div className='gallery_line-4'>
            <img src={img11} id='img10' height={350} width={400} style={{ border: '4px solid #65ceee', borderRadius: '15px' }} /> {" "}
            <img src={img10} id='img11' height={350} width={400} style={{ border: '4px solid #65ceee', borderRadius: '15px' }} /> {" "}
            <img src={img12} id='img12' height={350} width={400} style={{ border: '4px solid #65ceee', borderRadius: '15px' }} />
          </div>
          <div className='text-5' >
            Safari
          </div>
          <div className='gallery_line-5'>
            <img src={img13} id='img13' height={350} width={400} style={{ border: '4px solid white', borderRadius: '15px' }} /> {" "}
            <img src={img14} id='img14' height={350} width={400} style={{ border: '4px solid white', borderRadius: '15px' }} /> {" "}
            <img src={img15} id='img15' height={350} width={400} style={{ border: '4px solid white', borderRadius: '15px' }} />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Gallery


