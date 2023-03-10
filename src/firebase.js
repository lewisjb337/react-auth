import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: your_api_key,
  authDomain: yourauth_domain,
  projectId: your_proj_id,
  storageBucket: your_storage_bucket,
  messagingSenderId: your_sender_id,
  appId: your_app_id
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;