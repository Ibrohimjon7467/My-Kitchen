import { toast } from "react-toastify"
import AddBooks from "../components/AddBooks"
import { db } from "../firebase/firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore"
import { useCollection } from "../hooks/useCollection"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Home() {

  const { user } = useGlobalContext()
  const { documents } = useCollection("books", ["userId", "==", user.uid])

  // delete docs
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "books", id))
    toast.error("You deleted the recipe")
  }

  return (
    <div className="mt-6">
      <AddBooks userId={user.uid} />
      {documents && (
        <div className="mt-10">
          <ul className="flex justify-around flex-wrap gap-y-5 gap-x-1">
            {documents.map((doc) => {
              return (
                <li
                  className="flex flex-col gap-5 text-black w-[350px] rounded bg-slate-300"
                  key={doc.id}
                >
                  <figure>
                    <img className="w-full rounded h-80 object-cover" src={doc.img} />
                  </figure>
                  <div className="p-4">
                    <h3 className="font-extrabold mb-2 capitalize">{doc.title}</h3>
                    <p className="text-sm mb-2">Ingredients:
                      <em className="font-bold text-xs capitalize">{doc.ingredients}</em>
                    </p>
                    <p className="text-sm">Method:
                      <em className="font-bold text-xs capitalize">{doc.method}</em>
                    </p>
                    <p className="text-sm">cookingTime: <span className="font-bold text-xs">{doc.cookingTime} minutes</span></p>
                    <div className="card-actions self-end">
                      <button onClick={() => handleDelete(doc.id)}
                        className="btn btn-warning mt-auto btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
