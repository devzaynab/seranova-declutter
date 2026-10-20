
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt3tK4E2s3RWEWP8kV954KTKfCxQS8J5A",
  authDomain: "seranova-c801a.firebaseapp.com",
  projectId: "seranova-c801a",
  storageBucket: "seranova-c801a.firebasestorage.app",
  messagingSenderId: "750040601809",
  appId: "1:750040601809:web:4966ba2de3f8dfdbf9a1f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
