import { useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig"
import { collection, onSnapshot, query, where } from "firebase/firestore"

export function useCollection( col, _q ) {
  const [documents, setDocuments] = useState(null);
  const q = query(collection(db, col), where( ..._q ))

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setDocuments(docs)
    })
  }, [col])

  return { documents }  
}
