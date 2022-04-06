import React from 'react'
import "../../App.css";
import "./Vietnam.css";
import img from '../../images/vietnam2.jpg' 
import img2 from '../../images/vietnam.webp'

function Alps() {
    return (
        <>
            <div className='contain'>
                <div className='alps-title'>
                    VIETNAM
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
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Vietnam, is a country in Southeast Asia. Located at the eastern edge of mainland Southeast Asia, it covers 311,699 square kilometres. With a population of over 96 million, it is the world's fifteenth-most populous country.<br /><br />
                        <div className='price'>Guided Tour : 9 Days/8 Nights at just 21,396 Rs.</div><br />
                        <div className='get'>What will you get?<br /></div>
                        <div className='list'>
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Visa Plan<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Premium Stays at every location<br />
                        {/* &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Tour Guides for every location<br /> */}
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Emergency medication<br />
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Alps
