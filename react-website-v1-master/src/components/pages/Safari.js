import React from 'react'
import "../../App.css";
import "./Alps.css";
import img from '../../images/safari1.jpg'
import img2 from '../../images/safari2.jpg'

function Alps() {
    return (
        <>
            <div className='contain'>
                <div className='alps-title'>
                    SAFARI
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
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Kenya is the place where the concept of a wildlife safari was born. The most popular animal species spotted here are lions, leopards and cheetahs. Other animals found here are African Buffalo, Thomson’s Gazelle, Zebra, Hartebeest and the Klipspringer Antelope, among others.<br /><br />
                        <div className='price'>Guided Tour : 7 Nights at just 94,990 Rs.</div><br />
                        <div className='get'>What will you get?<br /></div>
                        <div className='list'>
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Visa Plan<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Premium Stays at every location<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Sightseeing<br />
                        &emsp;&emsp;&emsp;&emsp;<i class="fa fa-arrow-right" /> Emergency medication<br />
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Alps
