import { useRef } from "react"
import { toast } from "react-toastify"
import { db } from "../firebase/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"

function AddBooks({ userId }) {

  const img = useRef()
  const title = useRef()
  const cookingTime = useRef()
  const ingredients = useRef()
  const method = useRef()
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      img: img.current.value,
      title: title.current.value,
      ingredients: ingredients.current.value,
      method: method.current.value,
      cookingTime: +cookingTime.current.value,
      userId,
    }

    addDoc(collection(db, "books"), data)
    toast.success("You added the recipe")

    form.current.reset()
  }

  return (
    <div className="w-full max-w-[300px] mx-auto my-7">
      <h2 className="text-2xl mb-7">Create New Recipes</h2>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="flex flex-col gap-3"
      >
        <label className="flex flex-col gap-3">
          <span>Title:</span>
          <input
            className="bg-slate-200 px-3 py-1 text-xs input input-bordered w-full max-w-xs"
            ref={title}
            type="text"
            placeholder="Name"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span>image URL:</span>
          <input
            className="bg-slate-200 px-3 py-1 text-xs input input-bordered w-full max-w-xs"
            ref={img}
            type="text"
            placeholder="Enter img url"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span>ingredients:</span>
          <input
            className="bg-slate-200 px-3 py-1 text-xs input input-bordered w-full max-w-xs"
            ref={ingredients}
            type="text"
            placeholder="Ingredients"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span>method:</span>
          <input
            className="bg-slate-200 px-3 py-1 text-xs input input-bordered w-full max-w-xs"
            ref={method}
            type="text"
            placeholder="Method"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span>Cooking Time:</span>
          <input
            className="bg-slate-200 px-3 py-1 text-xs input input-bordered w-full max-w-xs"
            ref={cookingTime}
            type="number"
            placeholder="Cooking Time"
          />
        </label>
        <button className="btn btn-success mt-5"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div >
  )
}

export default AddBooks