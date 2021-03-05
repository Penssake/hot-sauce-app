import { useState, useReducer } from "react"

import formReducer from "../reducers/form";

const initialFormState = {
    title: "",
    subtitle: "",
    description: "",
    imgUrl: "",
    imgAlt: "",
    img: {},
    productView: {},
    url: false
};

const AddSauce = ({ onAddSauce }) => {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    // errors
    const [titleError, setTitleError] = useState(false);
    const [subTitleError, setSubTitleError] = useState(false);

    const handleTextChange = (e) => {
        dispatch({
            type: "INPUT TEXT",
            field: e.target.name,
            payload: e.target.value
        })
    }

    let descriptionArray = [];

    const onSubmit = (e) => {
        e.preventDefault();
        let errors = 0;

        // error handling for required fields
        if (!formState.title) {
            setTitleError(true)
            errors += 1;
        }
        if (!formState.subtitle) {
            setSubTitleError(true)
            errors += 1;
        }

        if (errors) return;

        if (formState.imgUrl) {
            formState.img.src = formState.imgUrl;
            formState.url = true;
        }
        else formState.img.src = "greenPepper"

        if (formState.imgAlt) formState.img.alt = formState.imgAlt;
        else formState.img.alt = "Green pepper"

        formState.productView.title = formState.title;
        formState.productView.img = formState.img;
        formState.productView.url = formState.url;

        const id = Math.floor(Math.random() * 10000 + 1);

        if (formState.description) {
            descriptionArray.push({
                id: id,
                text: formState.description
            })
        } else {
            descriptionArray.push({
                id: id,
                text: "No description added"
            })
        }

        formState.productView.description = descriptionArray;

        onAddSauce({ formState })
    }

    const handleFocus = () => {
        setTitleError(false)
        setSubTitleError(false)
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <div className="add-form__form-control">
                <label>Sauce title<span className="required">*</span>{titleError && <span className="error">Title is required</span>}</label>
                <input type="text" placeholder="Sauce title" name="title" value={formState.title} onChange={(e) => handleTextChange(e)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Sub title<span className="required">*</span>{subTitleError && <span className="error">Sub title is required</span>}</label>
                <input type="text" placeholder="Sub title" name="subtitle" value={formState.subtitle} onChange={(e) => handleTextChange(e)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Description</label>
                <input type="text" placeholder="Description" name="description" value={formState.description} onChange={(e) => handleTextChange(e)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Image Url</label>
                <input type="text" placeholder="Image Url" name="imgUrl" value={formState.imgUrl} onChange={(e) => handleTextChange(e)} onFocus={handleFocus}></input>
            </div>
            <div className="add-form__form-control">
                <label>Image Alt</label>
                <input type="text" placeholder="Image Alt" name="imgAlt" value={formState.imgAlt} onChange={(e) => handleTextChange(e)} onFocus={handleFocus}></input>
            </div>

            <input type="submit" value="Save Sauce" className="add-form__btn btn"></input>
        </form>
    )
}

export default AddSauce;
