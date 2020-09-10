import React, { useState } from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] =useState({
    isSignedIn:false,
    name: '',
    email: '',
    photo: ''
  })

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn =() =>{
    
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
     const {displayName, email, photoURl} =res.user;
     const signedInUser = {
       isSignedIn: true,
       name:displayName,
       email: email,
       photo: photoURl
     }
     setUser(signedInUser)
    console.log(displayName, email, photoURl);
    })
    .catch(error =>{
      console.log(error)
      console.log(error.message)
    })
  }

  const handleSignOut = () => {
    // console.log('sign Out Clicked')
    firebase.auth().signOut()
    .then(res => {
      const signedOutUser ={
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
        }
        setUser(signedOutUser)
      })
    .catch (error => {
       // An error happened
    })
  }

  const handleBlur = (e) =>{
    // console.log(e.target.name, e.target.value);
  let isFormValid = true;  
  if (e.target.name === 'email'){
  //  const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
  const isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
  //  console.log(isEmailValid);
  }
  if (e.target.name === 'password'){
  const isPasswordValid = e.target.value.length > 6;
  const passwordHasNumber = /\d{1}/.test(e.target.value)
  // console.log(isPasswordValid && passwordHasNumber );
  isFormValid = isPasswordValid && passwordHasNumber;
  }

  if(isFormValid){
  // [...cart,newItem]
  const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
  }

  const handleSubmit = () =>{

}
return (
    <div className="App">
      {
        user.isSignedIn ? 
         <button onClick={handleSignOut}>Sign Out</button> :
          <button onClick={handleSignIn}>Sign in</button>
      }
     {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email is : {user.email}</p>
          <img src={user.photo} alt=""></img>
        </div>
      }
  <h1>Our Own Authentication</h1>
  <p>Email: {user.email} </p>
  <p>Password: {user.password}</p>
    <form onSubmit={handleSubmit}>
    <input onBlur={handleBlur} type="email" name="email" id="" placeholder="Your Email" required/> 
    <br/>
   
    <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Your Password" required/>
    <br/>
    <input type="submit" name="" id="" />
   </form>
  </div>
  );
}

export default App;



// 42.3
// import React, { useState } from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// function App() {
//   const [user, setUser] =useState({
//     isSignedIn:false,
//     name: '',
//     email: '',
//     photo: ''
//   })

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn =() =>{
    
//     firebase.auth().signInWithPopup(provider)
//     .then(res=>{
//      const {displayName, email, photoURl} =res.user;
//      const signedInUser = {
//        isSignedIn: true,
//        name:displayName,
//        email: email,
//        photo: photoURl
//      }
//      setUser(signedInUser)
//     console.log(displayName, email, photoURl);
//     })
//     .catch(error =>{
//       console.log(error)
//       console.log(error.message)
//     })
//   }

//   const handleSignOut = () => {
//     // console.log('sign Out Clicked')
//     firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser ={
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: ''
//         }
//         setUser(signedOutUser)
//       })
//     .catch (error => {
//        // An error happened
//     })
//   }

//   const handleChange = (e) =>{
//     console.log(e.target.name, e.target.value);
//   if (e.target.name === 'email'){
//    const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
//    console.log(isEmailValid);
//   }
//   if (e.target.name === 'password'){
//    const isPasswordValid = e.target.value.length > 6;
//   //  console.log(isPasswordValid); 
//   const passwordHasNumber = /\d{1}/.test(e.target.value)
//   console.log(isPasswordValid && passwordHasNumber );
//   }
//   }

//   const handleSubmit = () =>{

// }
// return (
//     <div className="App">
//       {
//         user.isSignedIn ? 
//          <button onClick={handleSignOut}>Sign Out</button> :
//           <button onClick={handleSignIn}>Sign in</button>
//       }
//      {
//         user.isSignedIn && <div>
//           <p>Welcome, {user.name}</p>
//           <p>Your Email is : {user.email}</p>
//           <img src={user.photo} alt=""></img>
//         </div>
//       }
//   <h1>Our Own Authentication</h1>
//     <form onSubmit={handleSubmit}>
//     <input onBlur={handleChange} type="email" name="email" id="" placeholder="Your Email" required/> 
//     <br/>
   
//     <input onBlur={handleChange} type="password" name="password" id="" placeholder="Your Password" required/>
//     <br/>
//     <input type="submit" name="" id="" />
//    </form>
//   </div>
//   );
// }

// export default App;

// 42.2
// import React, { useState } from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// function App() {
//   const [user, setUser] =useState({
//     isSignedIn:false,
//     name: '',
//     email: '',
//     photo: ''
//   })

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn =() =>{
    
//     firebase.auth().signInWithPopup(provider)
//     .then(res=>{
//      const {displayName, email, photoURl} =res.user;
//      const signedInUser = {
//        isSignedIn: true,
//        name:displayName,
//        email: email,
//        photo: photoURl
//      }
//      setUser(signedInUser)
//     console.log(displayName, email, photoURl);
//     })
//     .catch(error =>{
//       console.log(error)
//       console.log(error.message)
//     })
//   }

//   const handleSignOut = () => {
//     // console.log('sign Out Clicked')
//     firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser ={
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: ''
//         }
//         setUser(signedOutUser)
//       })
//     .catch (error => {
//        // An error happened
//     })
//   }

//   const handleChange = (event) =>{
//     console.log(event.target.name, event.target.value);
//     // console.log(event.target.name);
//     // console.log(event.target.value);

//   }

//   const handleSubmit = () =>{

// }
// return (
//     <div className="App">
//       {
//         user.isSignedIn ? 
//          <button onClick={handleSignOut}>Sign Out</button> :
//           <button onClick={handleSignIn}>Sign in</button>
//       }
//      {
//         user.isSignedIn && <div>
//           <p>Welcome, {user.name}</p>
//           <p>Your Email is : {user.email}</p>
//           <img src={user.photo} alt=""></img>
//         </div>
//       }
//   <h1>Our Own Authentication</h1>
//     {/* <form action=""> */}
//     <form onSubmit={handleSubmit}>
//     <input onBlur={handleChange} type="email" name="email" id="" placeholder="Your Email" required/> 
//     <br/>
//     {/* <input onChange={handleChange} type="password" name="" id="" placeholder="Your Password" required/> */}
//     <input onBlur={handleChange} type="password" name="password" id="" placeholder="Your Password" required/>
//     <br/>
//     <input type="submit" name="" id="" />
//    </form>
//   </div>
//   );
// }

// export default App;


// 41.8
// import React, { useState } from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// function App() {
//   const [user, setUser] =useState({
//     isSignedIn:false,
//     name: '',
//     email: '',
//     photo: ''
//   })

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn =() =>{
    
//     firebase.auth().signInWithPopup(provider)
//     .then(res=>{
//      const {displayName, email, photoURl} =res.user;
//      const signedInUser = {
//        isSignedIn: true,
//        name:displayName,
//        email: email,
//        photo: photoURl
//      }
//      setUser(signedInUser)
//     console.log(displayName, email, photoURl);
//     })
//     .catch(error =>{
//       console.log(error)
//       console.log(error.message)
//     })
//   }

//   const handleSignOut = () => {
//     // console.log('sign Out Clicked')
//     firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser ={
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: ''
//         }
//         setUser(signedOutUser)
//       })
//     .catch (error => {
//        // An error happened
//     })
//   }
//   return (
//     <div className="App">
//       {
//         user.isSignedIn ? 
//          <button onClick={handleSignOut}>Sign Out</button> :
//           <button onClick={handleSignIn}>Sign in</button>
//       }
//       {/* <button onClick={handleSignIn}>Sign In</button> */}
//       {
//         // user.isSignedIn && <p>Welcome, {user.name}</p>
//         user.isSignedIn && <div>
//           <p>Welcome, {user.name}</p>
//           <p>Your Email is : {user.email}</p>
//           <img src={user.photo} alt=""></img>
//         </div>
//       }
//     </div>
//   );
// }

// export default App;



// 41.7
// import React from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// function App() {
//   const [user, setUser] =useState({
//     isSignedIn:false,
//     name: '',
//     email: '',
//     photo: ''
//   })

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn =() =>{
    
//     firebase.auth().signInWithPopup(provider)
//     .then(res=>{
//      const {displayName, email, photoURl} =res.user
//      const signedInUser = {
//        isSignedIn: true,
//        name:displayName,
//        email: email,
//        photo: photoURl
//      }
//      setUser(signedInUser)
//     console.log(displayName, email, photoURl);
//     })
//     .catch(error =>{
//       console.log(error)
//       console.log(error.message)
//     })
//   }
//   return (
//     <div className="App">
//       <button onClick={handleSignIn}>Sign In</button>
//       {
//         // user.isSignedIn && <p>Welcome, {user.name}</p>
//         user.isSignedIn && <div>
//           <p>Welcome, {user.name}</p>
//           <p>yYour Email is : {user.email}</p>
//           <img src={user.photo} alt=""></img>
//         </div>

//       }
//     </div>
//   );
// }

// export default App;


// 41.6
// import React from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// function App() {

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn =() =>{
//     // console.log('SignIn Clicked')
//     firebase.auth().signInWithPopup(provider)
//     .then(res=>{
//       // console.log(res)
//       const {displayName, email, photoURl} =res.user
//       console.log(displayName, email, photoURl);
//     })
//   }
//   return (
//     <div className="App">
//       <button onClick={handleSignIn}>Sign In</button>
      
//     </div>
//   );
// }

// export default App;
