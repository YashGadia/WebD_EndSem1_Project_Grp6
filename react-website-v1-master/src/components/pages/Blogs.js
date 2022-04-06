import React from 'react';
import '../../App.css';
import './Blogs.css'

export default function Blogs() {
    return (
        <>
            <div className='title'>
                TESTIMONIALS
            </div>
            <div className='blogs'>
                <style>{'body { background-color: #070d2b; }'}</style>
                {/* <h1 className='blogs'>Blogs</h1> */}
                <div class="container-main">
                    <div className='container-1'>
                        <div className='textarea-1'>
                            <span className='rating'>
                                Rating:
                            </span>
                            <span className="second-word-formatting">
                                {" "} <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' />
                            </span>
                            <br />
                            18th Jan 2022
                            <br />
                            Excellent! Very good service from beginning to end. Even with a COVID-related delay in the middle of it, Utkarsh stayed in contact with us and got us a reschedule with the utmost of ease.
                            <br />
                            Thank you!
                            <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; - Erica B
                        </div>
                        <br />
                        <div className='textarea-2'>
                            <span className='rating'>
                                Rating:
                            </span>
                            <span className="second-word-formatting">
                                {" "} <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' />
                            </span>
                            <br />
                            08th Feb 2022
                            <br />
                            Aryan was extremely helpful! Any questions we had were answered very quickly via email or phone call. Not my first time using travel online and definitely NOT my last!
                            <br />
                            Great Service!
                            <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;- Daniel Saliba
                        </div>
                    </div>
                </div>
                <div class="container-unmain">
                    <div className='container-2'>
                        <div className='textarea-3'>
                            <span className='rating'>
                                Rating:
                            </span>
                            <span className="second-word-formatting">
                                {" "} <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' />
                            </span>
                            <br />
                            15th Feb 2022
                            <br />
                            Awesome Ventures is a great company to deal with.
                            Everything was very simple, professional and we were given all the information we required.
                            Thank you for the great service.
                            Commendable Job!!
                            <br />
                            <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Trena Kennedy
                        </div>
                        <br />
                        <div className='textarea-4'>
                            <span className='rating'>
                                Rating:
                            </span>
                            <span className="second-word-formatting">
                                {" "} <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' />
                            </span>
                            <br />
                            5th March 2022
                            <br />
                            Liked how you respond with things that matter when making a booking so far in advance, booking received, deposit, paid, details of booking, reminder to pay and user-friendly website.
                            <br />
                            Thanks again !!
                            <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Grazy Capellio
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


// import React from "react";
// import '../../App,css';
// import styled from "styled-components";
// // import avatarImage from "../assets/avatarImage.jpeg";
// export default function Testimonials() {
//   return (
//     <Section id="testimonials">
//       <div className="title">
//         <h2>Happy Customers</h2>
//       </div>
//       <div className="testimonials">
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             {/* <img src={avatarImage} alt="" /> */}
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             {/* <img src={avatarImage} alt="" /> */}
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             {/* <img src={avatarImage} alt="" /> */}
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// const Section = styled.section`
//   margin: 5rem 0;
//   .title {
//     text-align: center;
//     margin-bottom: 2rem;
//   }
//   .testimonials {
//     display: flex;
//     justify-content: center;
//     margin: 0 2rem;
//     gap: 2rem;
//     .testimonial {
//       background-color: aliceblue;
//       padding: 2rem;
//       border-radius: 0.5rem;
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       transition: 0.3s ease-in-out;
//       &:hover {
//         transform: translateX(0.4rem) translateY(-1rem);
//         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//       }
//       .info {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         align-items: center;
//         margin-top: 1rem;
//         img {
//           border-radius: 3rem;
//           height: 3rem;
//         }
//         .details {
//           span {
//             font-size: 0.9rem;
//           }
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .testimonials {
//       flex-direction: column;
//       margin: 0;
//       .testimonial {
//         justify-content: center;
//         .info {
//           flex-direction: column;
//           justify-content: center;
//         }
//       }
//     }
//   }
// `;
