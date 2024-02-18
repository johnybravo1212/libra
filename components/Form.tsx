'use client'
import React, { FormEvent } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useRouter } from 'next/navigation';

const firebaseConfig = {
  apiKey: "AIzaSyAX1g0IAGWILBT32mbSVZTCW3padJ99tEE",
  authDomain: "buoyant-aileron-414616.firebaseapp.com",
  projectId: "buoyant-aileron-414616",
  storageBucket: "buoyant-aileron-414616.appspot.com",
  messagingSenderId: "475114248805",
  appId: "1:475114248805:web:1969828146dc8e5e96048c",
  measurementId: "G-SCEYYN22VH"
};

// Ensure Firebase is initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

}

type Props = {
  data:any
}
const firestore = firebase.firestore();

function Form({data}: Props) {
    const router = useRouter();
    async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const userData = {
          name: formData.get('name'),
          surname: formData.get('surname'),
          email: formData.get('email'),
          phone: formData.get('phone')
        };
        try {
          await firestore.collection('users').add(userData);
          router.push('/thanks');
          console.log('Data added successfully!');
          // Optionally, you can redirect the user to a different page after form submission
        } catch (error) {
          console.error('Error adding data: ', error);
        }
      };

  return (
    <form className="register-form libra__form form" onSubmit={handleSubmit}>
            <input type="hidden" name="subid" defaultValue="ds1ibl1hmi2" />
            <div className="loader" style={{ textAlign: "center" }}>
              <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1" />
                <div className="cssload-cube cssload-c2" />
                <div className="cssload-cube cssload-c4" />
                <div className="cssload-cube cssload-c3" />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  paddingTop: 34,
                  position: "relative",
                  textAlign: "center",
                  color: "white"
                }}
              >
                Data processing
              </div>
            </div>
            <h2 className="libra__form-title">
            {data?.[0]?.form?.title}
            </h2>
            <div className="libra__form-input">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="libra__form-input">
              <label htmlFor="surname">Surname</label>
              <input
                className="form-input"
                type="text"
                name="surname"
                id="surname"
                required
              />
            </div>
            <div className="libra__form-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="libra__form-input">
              <label htmlFor="phone">Phone number</label>
              <input
                name="phone"
                id="phone"
                type="tel"
                className="form-input"
                required
              />
              <span id="error-msg" className="hide" />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="checkbox"
                name="eu"
                id="eu"
                style={{ position: "absolute" }}
                required
                defaultChecked
              />
              <label style={{ marginLeft: 20, fontSize: 16 }} htmlFor="eu">
              {data?.[0]?.form?.terms}
              </label>
            </div>
            <div className="libra__form-button">
              <button name="submitBtn" type="submit">
              {data?.[0]?.form?.button_text}
              </button>
            </div>
          </form>
  )
}

export default Form