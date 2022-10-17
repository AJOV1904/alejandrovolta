import { db } from "./firebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";
const btnLogin = document.getElementById("btn-login")

btnLogin.onclick = () => {
    getData()
}

async function getData() {
    const q = query(collection(db, "users"), where('mail', '==', categoria))
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
}