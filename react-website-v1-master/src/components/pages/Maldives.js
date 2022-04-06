import React from 'react'
import "../../App.css";
import "./Maldives.css";
import img from '../../images/maldives1.webp'
import img2 from '../../images/maldives2.jpg'

function Alps() {
    return (
        <>
            <div className='contain'>
                <div className='alps-title'>
                    MALDIVES
                </div>
                <br />
                <div className='img-alps'>
                    <img src={img} height={250} width={350} style={{ border: '4px solid #fff', borderRadius: '15px'}} />
                </div>
                <div className='img2-alps'>
                <img src={img2} height={250} width={350} style={{ border: '4px solid #fff', borderRadius: '15px'}} />
                </div>
                <div className='paragraph'>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Maldives, officially the Republic of Maldives, is an archipelagic country in the Indian subcontinent of Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres (470 miles; 400 nautical miles) from the Asian continent's mainland.<br /><br />
                        <div className='price'>Guided Tour : 5 Days/4 Nights at just 54,957 Rs.</div><br />
                        <div className='get'>What will you get?<br /></div>
                        <div className='list'>
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Visa and Passport Plan<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> 3 star premium stay<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Tour Guides at every location<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Emergency medication<br />
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Alps
