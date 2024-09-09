import { doc, setDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { db } from './firebase.js'

async function registerUserDataBase(userName, userContact, appName) {
    const userId = Date.now().toString()

    await setDoc(doc(db, "users", userId), {
        name: userName,
        number: userContact,
        appName: appName
    });

    if (!appName || appName == "" || appName == " ")
        return

    const namesRef = doc(db, "appNames", "names");
    await updateDoc(namesRef, {
        names: arrayUnion(appName)
    });
}

export { registerUserDataBase }