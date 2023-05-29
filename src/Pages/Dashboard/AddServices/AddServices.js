import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddServices = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbb_key
    console.log(imgHostKey)



    const handleAddService = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                }

                const service = {
                    name: data.name,
                    title: data.title,
                    image: imgData.data.url
                }

                fetch('https://jerins-parlour-server-topaz.vercel.app/service', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('access-token')}`
                    },
                    body: JSON.stringify(service)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success(`${data.name} is added successfully`)
                        navigate('/dashboard/manageservices')
                    })

            })

    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='w-96 p-8'>
            <h2 className="text-4xl">Add a Service</h2>
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
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"  {...register("image", { required: "photo Address is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-5' value='Add a Service' type="submit" />
            </form>
        </div>
    );
};

export default AddServices;