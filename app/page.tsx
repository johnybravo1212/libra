import Form from '@/components/Form';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { remark } from 'remark';
import html from 'remark-html';
type Data = {
  id: string;
  left_container?: string;
  right_container?: string;
  hero_section?: {
    title: string;
    subtitle: string;
    text: string;
    button_link: string;
    button_text: string;
  };
  videoo: string;
  left_image: string;
  footer_override: string;
};

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
const firestore = firebase.firestore();


export default async function Home() {
    const collectionRef = firestore.collection('homepage');
    const snapshot = await collectionRef.get();
    const data: Data[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }) as Data);
    const left_container = await remark().use(html).process(data?.[0]?.left_container);
    const right_container = await remark().use(html).process(data?.[0]?.right_container);

return <>
  <header className="header">
    <div className="header-container">
      <h1 className="header__title">
        {data?.[0]?.hero_section?.title}
      </h1>
      <p className="header__text">
      {data?.[0]?.hero_section?.subtitle}

      </p>
      <div className="header__video">
      <video controls preload="none" >
      <source src={data?.[0]?.videoo} type="video/mp4" />
      
    </video>
        <p className="header__video-text">
        {data?.[0]?.hero_section?.text}

        </p>
      </div>
      <div className="header__register">
        <a
          href={data?.[0]?.hero_section?.button_link}

          className="header__register-link"
        >
                  {data?.[0]?.hero_section?.button_text}

        </a>
      </div>
    </div>
  </header>
  <section className="libra">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="libra__logo">
            <img src="./logo.svg" alt="Логотип Libra" />
          </div>
          <div className="libra__wrapper desctop-form" dangerouslySetInnerHTML={{__html: left_container?.value}}>
          </div>
        </div>
        <div className="col-xl-6">
          <Form data={data}/>
          <div className="libra__wrapper mobile-form" dangerouslySetInnerHTML={{__html: left_container?.value}}>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="meta">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="meta__img">
            <img src={ data?.[0]?.left_image} alt="Mark Zuckerberg" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="meta__wrapper" dangerouslySetInnerHTML={{__html: right_container?.value}}>
            
          </div>
          <div className="libra__logo meta__logo">
            <img src="./logo.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="container">
      <div className="footer__copy">
        <p>
           {data?.[0]?.footer_override}
        </p>
      </div>
      <div className="footer__email"></div>
      <div className="footer__pr">
      </div>
    </div>
  </footer>
</>

}
