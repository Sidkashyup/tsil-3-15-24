// import React, { useState } from 'react';
// import { FaRegAddressCard } from "react-icons/fa";
// import { IoDocumentOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { FaRegTimesCircle } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import Otpverifykk from "./Otpverifysginup"

// import { CiMobile1 } from "react-icons/ci"; // Import CiMobile1 icon

// function Signup({ isSignUp, setIsSignUp, user, setUser, userCollection, setUserCollection }) {

//   const [isVerified, setIsVerified] = useState({
//     MobileOtp: null,
//     emailOtp: null
//   });
  
//   const [btn, setBtn] = useState({
//     MobileOtp: false,
//     emailOtp: false
//   });
//   const [userType, setUserType] = useState('Retail');
//   const [showRetailFields, setShowRetailFields] = useState(true);
//   const [showCorporateFields, setShowCorporateFields] = useState(false);
//   const [mobile, setmobile] = useState(false);



//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//     setShowRetailFields(e.target.value === 'Retail');
//     setShowCorporateFields(e.target.value === 'Corporate');
//   };

 
//   const OTP = { MobileOtp: "931869", emailOtp: "931869" };


//   const isDisabled = () => {
//     const requiredFields = ['username', ];
//     let isValid = true;
//     requiredFields.forEach(field => {
//       if (!user[field]) {
//         isValid = false;
//       }
//     });
//     return !isValid    ;
//   };

// console.log(mobile)

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/Auth/Signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           UserType: userType,
//           username: user.username,
//           gst:user.gst,
//           pan: user.pan,
//           Email: user.Email,
//           Phone: user.phone
//         })
//       });
  
//       if (response.ok) {
//         const data = await response.json();

//         console.log('User signed up successfully:', data);
//         // Clear the form or do any other necessary actions upon successful signup
//         setIsSignUp(false); // Close the signup form
//         navigator("/dashboard");
//       } else {
//         console.error('Failed to sign up:', response.statusText);
//         // Handle error response from the backend
//       }
//     } catch (error) {
//       console.error('Error while signing up:', error.message);
//       // Handle any network errors or exceptions
//     }
//   };
  
  


//   return (
//     <div className='  w-[150%]'>
//         <div className=" space-between bg-gray-200 p-2 flex flex-row items-center justify-evenly mr-2 mb-2 rounded-md">
//           <input  className="m-[4%]" type='radio' name='userType' value="Retail" onChange={handleUserTypeChange} />Retail User
//           <input   className="m-[4%]"  type='radio' name='userType' value="Corporate" onChange={handleUserTypeChange} /> Corporate User
//         </div>
//       <form action="" className="flex flex-col items-centre gap-2" onSubmit={handleSubmit}>
        
//           <>
//           {showRetailFields && (
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Name' onChange={handleChange} required />
//             </div>
//             )}

// { !showRetailFields && (
//   <>
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Company Name' onChange={handleChange} required />
//             </div>
//               <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
//               <IoDocumentOutline className={user.gst ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required />
//             </div>
//             </>
//  )}

//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.pan ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required />
//             </div>
          
//           <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
//             <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//             <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
//           </div>
//           <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
//             <CiMobile1 className={user.Phone ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//             <input type='phone' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Phone' placeholder='Enter Your Phone Number' onChange={handleChange}  />
//           </div>
//         <button type='submit' disabled={isDisabled()} className={`border-2 mb-5 border-green-500 rounded-full px-12 py-2 inline-block font-semibold ${!isDisabled() ? 'text-white bg-green-600 hover:bg-green-700' : 'text-green-500 cursor-not-allowed'}`} onClick={handleSubmit}>Sign Up</button>
//           </>
       
//            </form>
//     </div>
//   )
// }

// export default Signup;








 import React, { useEffect, useState } from 'react';
import { FaRegAddressCard } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Otpverifykk from "./Otpverifysginup"
import { ToastContainer, toast } from 'react-toastify';


import { CiMobile1 } from "react-icons/ci"; // Import CiMobile1 icon
import Otpverify from './Otpverifysginup';

function Signup({ isSignUp, setIsSignUp, user, setUser, userCollection, setUserCollection }) {

  const [isVerified, setIsVerified] = useState({
    MobileOtp: null,
    emailOtp: null
  });
  
  const [btn, setBtn] = useState({
    MobileOtp: false,
    emailOtp: false
  });
  const [userType, setUserType] = useState('Retail');
  const [showRetailFields, setShowRetailFields] = useState(true);
  const [showCorporateFields, setShowCorporateFields] = useState(false);
  const [mobile, setmobile] = useState(false);



  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setShowRetailFields(e.target.value === 'Retail');
    setShowCorporateFields(e.target.value === 'Corporate');
  };

 
  const OTP = { MobileOtp: "931869", emailOtp: "931869" };


  const isDisabled = () => {
    const requiredFields = ['username',  mobile ];
    let isValid = true;
    requiredFields.forEach(field => {
      if (!user[field]) {
        isValid = false;
      }
    });
    return !isValid  || !mobile ;
  };

console.log(mobile)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
    
  const tostershow = () => {
    // Show toast message
    toast.success(' Successfully Sign Up!', {
      position: "bottom-right",
      autoClose: 2000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        marginBottom: '20%' // Corrected CSS property name
      }
    });
    
  }

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5010/Auth/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          UserType: userType,
          username: user.username,
          gst:user.gst,
          pan: user.pan,
          Email: user.Email,
          Phone: user.phone
        })
      });
  
      if (response.ok) {
        
        const data = await response.json();
        console.log('User signed up successfully:', data);
                // Clear the form or do any other necessary actions upon successful signup
        setIsSignUp(false); // Close the signup form
      } else {
        console.error('Failed to sign up:', response.statusText);
        // Handle error response from the backend
      }
    } catch (error) {
      console.error('Error while signing up:', error.message);
      // Handle any network errors or exceptions
    }
  };
  
  


  return (
    <div className='  w-[150%]'>
        <div className=" space-between bg-gray-200 p-2 flex flex-row items-center justify-evenly mr-2 mb-2 rounded-md">
          <input  className="m-[4%]" type='radio' name='userType' value="Retail" onChange={handleUserTypeChange} />Retail User
          <input   className="m-[4%]"  type='radio'   name='userType' value="Corporate" onChange={handleUserTypeChange} /> Corporate User
        </div>
      <form action="" className="flex flex-col items-centre gap-2" onSubmit={handleSubmit}>
        
          <>
          {showRetailFields && (
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
              <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
              <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Name' onChange={handleChange} required />
            </div>
            )}

{ !showRetailFields && (
  <>
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
              <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
              <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Company Name' onChange={handleChange} required />
            </div>
              <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
              <IoDocumentOutline className={user.gst ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
              <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required />
            </div>
            </>
 )}

            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
              <FaRegAddressCard className={user.pan ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
              <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required />
            </div>
          
          <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
            <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
          </div>
          {/* <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
            <CiMobile1 className={user.phone ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input type='text' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Phone' placeholder='Enter Your Phone Number' onChange={(e) => setMobile(e.target.value)} required />
          </div> */}
       
       <Otpverifykk />
        <button type='submit'  className={`border-2 mb-5 border-green-500 rounded-full px-12 py-2 inline-block font-semibold `} onClick={handleSubmit}>Sign Up</button>
          </>
       
           </form>
           <ToastContainer />

    </div>
  )
}

export default Signup;





// import React, { useState } from 'react';
// import Otpverifykk from "./Otpverifysginup";

// function Signup({ isSignUp, setIsSignUp, user, setUser, userCollection, setUserCollection }) {
//   const [userType, setUserType] = useState('Retail');
//   const [showRetailFields, setShowRetailFields] = useState(true);
//   const [mobile, setMobile] = useState(''); // State for mobile number

//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//     setShowRetailFields(e.target.value === 'Retail');
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5100/Auth/Signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           UserType: userType,
//           username: user.username,
//           gst: user.gst,
//           pan: user.pan,
//           Email: user.Email,
//           Phone: mobile // Use the mobile state here
//         })
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log('User signed up successfully:', data);
//         setIsSignUp(false);
//         // Redirect to dashboard or perform necessary action
//       } else {
//         console.error('Failed to sign up:', response.statusText);
//         // Handle error response from the backend
//       }
//     } catch (error) {
//       console.error('Error while signing up:', error.message);
//       // Handle any network errors or exceptions
//     }
//   };

//   const isDisabled = () => {
//     // Check if any required field is empty
//     const requiredFields = ['username', 'pan', 'Email'];
//     let isValid = requiredFields.every(field => user[field]);
//     // Check if mobile number is empty
//     isValid = isValid && mobile.trim() !== '';
//     return !isValid;
//   };

//   return (
//     <div className='w-[150%]'>
//       <div className="space-between bg-gray-200 p-2 flex flex-row items-center justify-evenly mr-2 mb-2 rounded-md">
//         <input className="m-[4%]" type='radio' name='userType' value="Retail" onChange={handleUserTypeChange} />Retail User
//         <input className="m-[4%]" type='radio' name='userType' value="Corporate" onChange={handleUserTypeChange} /> Corporate User
//       </div>
//       <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
//         {showRetailFields && (
//           <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//             <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Name' onChange={handleChange} required />
//           </div>
//         )}
//         {!showRetailFields && (
//           <>
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Company Name' onChange={handleChange} required />
//             </div>
//             <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required />
//             </div>
//           </>
//         )}
//         <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//           <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required />
//         </div>
//         <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
//           <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
//         </div>
//         <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
//           <input type='text' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Phone' placeholder='Enter Your Phone Number' onChange={(e) => setMobile(e.target.value)} required />
//         </div>
//         <Otpverifykk />
//         <button type='submit' className={`border-2 mb-5 border-green-500 rounded-full px-12 py-2 inline-block font-semibold `}  onClick={handleSubmit}>Sign Up</button>
//       </form>
//     </div>
//   )
// }

// export default Signup;
















// import React, { useState } from 'react';
// import { FaRegAddressCard } from "react-icons/fa";
// import { IoDocumentOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiMobile1 } from "react-icons/ci";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { FaRegTimesCircle } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import Otpverifysginup from "./Otpverifysginup"

// function Signup({ isSignUp, setIsSignUp, user, setUser, userCollection, setUserCollection }) {
//   const [isVerified, setIsVerified] = useState({
//     MobileOtp: null,
//     emailOtp: null
//   });
//   const [btn, setBtn] = useState({
//     MobileOtp: false,
//     emailOtp: false
//   });
//   const [userType, setUserType] = useState('Retail');
//   const [showRetailFields, setShowRetailFields] = useState(true);
//   const [showCorporateFields, setShowCorporateFields] = useState(false);
//   const [mobile, setmobile] = useState(false);

//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//     setShowRetailFields(e.target.value === 'Retail');
//     setShowCorporateFields(e.target.value === 'Corporate');
//   };

//   const handleButton = (e) => {
//     let name = e.target.name;
//     if (name === "MobileOtpBtn") {
//       setBtn({ ...btn, MobileOtp: true });
//     } else {
//       setBtn({ ...btn, emailOtp: true });
//     }

//   };

//   const OTP = { MobileOtp: "931869", emailOtp: "931869" };

//   const isDisabled = () => {
//     const requiredFields = ['username', 'Email','Phone' ];
//     let isValid = true;
//     requiredFields.forEach(field => {
//       if (!user[field]) {
//         isValid = false;
//       }
//     });
//     return !isValid || !mobile;
//   };

// console.log(mobile)

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

 

//   const handleSubmit = async (e) => {
//          e.preventDefault();
//          setUserCollection([...userCollection, user]);
//          try {
//            const response = await fetch('https:transview-backend-2.onrender.com/Auth/Signup', {
//              method: 'POST',
//              headers: {
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                UserType: userType,
//                username: user.username,
//                gst:user.gst,
//                pan: user.pan,
//                Email: user.Email,
//              })
//            });
      
//            if (response.ok) {
//              const data = await response.json();
//              console.log('User signed up successfully:', data);
              
//              setIsSignUp(false);  
             
//            } else {
//              console.error('Failed to sign up:', response.statusText);
   
//            }
//          } catch (error) {
//            console.error('Error while signing up:', error.message);
          
//          }
//        };
      

//   const handleVerify = (e) => {
//     const name = e.target.name;
//     const val = e.target.value;
//     if (name === "MobileOtpBtn") {
//       if (user.MobileOtp === '') alert("please enter otp");
//       else if (user.MobileOtp === OTP.MobileOtp) {
//         setIsVerified({ ...isVerified, MobileOtp: true });
//       }
//       else setIsVerified({ ...isVerified, MobileOtp: false });
//     } else {
//       if (user.emailOtp === '') alert("please enter otp");
//       else if (user.emailOtp === OTP.emailOtp) {
//         setIsVerified({ ...isVerified, emailOtp: true });
//       }
//       else setIsVerified({ ...isVerified, emailOtp: false });
//     }
//   };

//   const handleSubmitBtnClick = () => {
//     setIsSignUp(false);
//   };

//   return (
//     <div className='  w-[100%]'>
      
//         <div className=" space-between bg-gray-200 p-2 flex flex-row items-center justify-evenly mr-2 mb-2 rounded-md">
//           <input  className="m-[4%]" type='radio' name='userType' value="Retail" onChange={handleUserTypeChange} />Retail User
//           <input   className="m-[4%]"  type='radio' name='userType' value="Corporate" onChange={handleUserTypeChange} /> Corporate User
//         </div>
//       <form action="" className="flex flex-col items-centre gap-2" onSubmit={handleSubmit}>
        
//         {showRetailFields && (
//           <>
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Name' onChange={handleChange} required />
//             </div>

//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Company Name' onChange={handleChange} required />
//             </div>

//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.pan ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required />
//             </div>
//             <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
//               <IoDocumentOutline className={user.gst ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required />
//             </div>
//           <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
//             <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//             <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
//           </div>         
//           </>
//         )}
//        {showCorporateFields && (
//           <>
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.username ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='username' placeholder='Enter Your Company Name' onChange={handleChange} required />
//             </div>
//             <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
//               <FaRegAddressCard className={user.pan ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required />
//             </div>
//             <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
//               <IoDocumentOutline className={user.gst ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required />
//             </div>
//             <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
//             <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//             <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
//           </div>
//           </>
//         )} 
//        <div className="flex flex-row items-center mr-2 mb-2">
//         <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
//           <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//           <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required />
//         </div>
//         <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
//           <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg' name='emailOtp' onChange={handleChange} placeholder='Enter OTP' />
//           {isVerified.emailOtp === true && <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" />}
//           {isVerified.emailOtp === false && <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />}
//         </div>
//         {!btn.emailOtp ? <button type='button' onClick={handleButton} name='emailOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Get OTP </button> : <button type='button' onClick={handleVerify} name='emailOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Verify </button>}
//       </div>
//       <div className="flex flex-row items-center mr-2 mb-2">
//         <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
//           <CiMobile1 className={user.Phone ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
//           <input type='number' className='bg-gray-200 outline-none text-sm flex-1' name='Phone' placeholder='Enter Your Mobile Number' onChange={handleChange} required />
//         </div>
//         <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
//           <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg' name='MobileOtp' onChange={handleChange} placeholder='Enter OTP' required />
//           {isVerified.MobileOtp === true && <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" />}
//           {isVerified.MobileOtp === false && <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />}
//         </div>
//         {!btn.MobileOtp ? <button type='button' onClick={handleButton} name='MobileOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Get OTP </button> : <button type='button' onClick={handleVerify} name='MobileOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Verify </button>}
//       </div> 
//       <button
//   type='submit'
//   className="border-2 mb-5 border-green-500 rounded-full px-12 py-2 inline-block font-semibold text-white bg-green-600 hover:bg-green-700"
//   onClick={handleSubmitBtnClick}
// >
//   Sign Up
// </button>
//            </form>
//     </div>
//   )
// }

// export default Signup;
