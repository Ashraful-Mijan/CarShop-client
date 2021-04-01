import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL
        }
        const url = `http://localhost:9000/addProduct`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
           body:JSON.stringify(eventData)
        })
    };

    const imageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1700808f047b1d6d5c6058f995df69ed');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-6">
                    <legend>Add Products</legend>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Name: </label>
                            <input name="name" type="text" className="form-control" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Price:" className="form-label">Adde Price: </label>
                            <input name="price"  type="text" className="form-control" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wight:" className="form-label">Wight: </label>
                            <input name="wight" type="text" className="form-control" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo:" className="form-label">Add Photo: </label>
                            <input type="file" className="form-control" onChange={imageUpload} />
                        </div>

                        <label htmlFor="submit"></label>
                        <input type="submit" className="btn btn-primary" value="save" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;