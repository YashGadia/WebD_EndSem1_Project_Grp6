import React from 'react'
import "../../App.css";
import "./Alps.css";
import img from '../../images/alps1.png'
import img2 from '../../images/alps2.jpg'

function Alps() {
    return (
        <>
            <div className='contain'>
                <div className='alps-title'>
                    ALPS MOUNTAINS
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
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Alps are the highest and most extensive mountain range system that lies entirely in Europe, stretching approximately 750 mi (1,210 km) across eight Alpine countries (from west to east): France, Switzerland, Monaco, Italy, Liechtenstein, Austria, Germany, and Slovenia.<br /><br />
                        <div className='price'>Guided Tour : 9 Days/8 Nights at just 1,49,549 Rs.</div><br />
                        <div className='get'>What will you get?<br /></div>
                        <div className='list'>
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Visa Plan<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Premium Stays at every location<br />
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
