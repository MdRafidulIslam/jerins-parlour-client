import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()




    const handleAddService = data => {
        const review = {
            name: data.name,
            title: data.title,
            description: data.description

        }

        fetch('https://jerins-parlour-server-topaz.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(`Review is added successfully`)
                // navigate('/dashboard/manageservices')
            })



    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='w-96 p-8'>
            <h2 className="text-4xl">Add a Review</h2>
            <form onSubmit={handleSubmit(handleAddService)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Name Address is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" {...register("title", { required: "title Address is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: "description Address is required" })} className="textarea textarea-secondary w-full" ></textarea>

                </div>


                <input className='btn btn-accent w-full mt-5' value='Add a Review' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;