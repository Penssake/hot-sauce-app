import { useState } from "react"

const AddSauce = ({ onAddSauce }) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [subtitle, setSubTitle] = useState("");
    const [subTitleError, setSubTitleError] = useState(false);
    const [description, setDescription] = useState("");
    const [imgUrl, setImageUrl] = useState("");
    const [imgAlt, setImageAlt] = useState("");

    let img = {};

    const onSubmit = (e) => {
        e.preventDefault();
        let errors = 0;

        // error handling for required fields
        if (!title) {
            setTitleError(true)
            errors += 1;
        }
        if (!subtitle) {
            setSubTitleError(true)
            errors += 1;
        }

        if (errors) return;

        if (imgUrl) img.src = imgUrl;
        else img.src = "greenPepper"

        if (imgAlt) img.alt = imgAlt;
        else img.alt = "Green pepper"

        onAddSauce({ title, subtitle, description, img })

        setTitle("")
        setSubTitle("")
        setDescription("")
        setImageUrl("")
        setImageAlt("")
    }

    const handleFocus = () => {
        setTitleError(false)
        setSubTitleError(false)
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <div className="add-form__form-control">
                <label>Sauce title<span className="required">*</span>{titleError && <span className="error">Title is required</span>}</label>
                <input type="text" placeholder="Sauce title" value={title} onChange={(e) => setTitle(e.target.value)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Sub title<span className="required">*</span>{subTitleError && <span className="error">Sub title is required</span>}</label>
                <input type="text" placeholder="Sub title" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Description</label>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Image Url</label>
                <input type="text" placeholder="Image Url" value={imgUrl} onChange={(e) => setImageUrl(e.target.value)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Image Alt</label>
                <input type="text" placeholder="Image Alt" value={imgAlt} onChange={(e) => setImageAlt(e.target.value)} onFocus={handleFocus}></input>
            </div>

            <input type="submit" value="Save Sauce" className="add-form__btn"></input>
        </form>
    )
}

export default AddSauce;