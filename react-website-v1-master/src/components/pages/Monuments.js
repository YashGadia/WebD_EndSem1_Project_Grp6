import React from 'react'
import "../../App.css";
import "./Monuments.css";
import img from '../../images/monuments1.jpg'
import img2 from '../../images/monuments2.jpg'

function Alps() {
    return (
        <>
            <div className='contain'>
                <div className='alps-title'>
                    MOUMENTS 
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
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;At present, there are 40 World Heritage Sites located in India. Out of these, 32 are cultural, 7 are natural, and 1 is mixed (meeting both cultural and natural criteria),[4] as determined by the organization's selection criteria. India has the sixth largest number of sites in the world.<br /><br />
                        <div className='price'>Guided Tour : 1 day at just 5,672 Rs.</div><br />
                        <div className='get'>What will you get?<br /></div>
                        <div className='list'>
                        {/* &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Visa Plan<br /> */}
                        {/* &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Premium Stays at every location<br /> */}
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Tour Guides for every location<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Emergency medication<br />
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Alps
