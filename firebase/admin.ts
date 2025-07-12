import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    const apps = getApps();

    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId: process.env.Firebase_Projet_ID,
                clientEmail: process.env.Firebase_Client_Emial,
                privateKey: process.env.Firebase_Private_Key?.replace(/\\n/g, "\n")
            })
        })
    }

    return {
        auth: getAuth(),
        db: getFirestore()
    }
}

export const { auth, db } = initFirebaseAdmin();