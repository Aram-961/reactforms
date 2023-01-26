import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const [clicked, setClicked] = useState(false);
    const [changed, setChanged] = useState("");
    const handleClick = () => {
        setClicked(!clicked);
        setChanged(!changed)
        toast.success(`${changed ? "followed" : "unfollowed"}`)
    }


    return (
        <div>
            <button onClick={handleClick}>{clicked ? "Follow" : "unfollow"}</button>
            <ToastContainer />
        </div>
    )
}

export default Toastify