import { useState } from "react"

const AddSauce = ({ onAddSauce }) => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImageUrl] = useState("");
    const [imgAlt, setImageAlt] = useState("");
    const [useDefaultImage, setUseDefaultImage] = useState(false);

    let img = {};

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            // TODO better error
            alert("Title is required")
            return;
        }

        if(imgUrl) img.src = imgUrl;
        else img.src = "greenPepper"

        if(imgAlt) img.alt = imgAlt;
        else img.alt = "Green pepper"

        onAddSauce({ title, subTitle, description, img })

        setTitle("")
        setSubTitle("")
        setDescription("")
        setImageUrl("")
        setImageAlt("")
        setUseDefaultImage(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Sauce title</label>
                <input type="text" placeholder="Sauce title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Sub title</label>
                <input type="text" placeholder="Sub title" value={subTitle} onChange={(e) => setSubTitle(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Description</label>
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-control">
                <label>Image Url</label>
                <input type="text" placeholder="Image Url" value={imgUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Image Alt</label>
                <input type="text" placeholder="Image Alt" value={imgAlt} onChange={(e) => setImageAlt(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Use default image?</label>
                <input type="checkbox" value={useDefaultImage} checked={useDefaultImage} onChange={(e) => setUseDefaultImage(e.currentTarget.checked)}></input>
            </div>

            <input type="submit" value="Save Sauce" className="btn"></input>
        </form>
    )
}

export default AddSauce;