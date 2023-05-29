import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const ManageServices = () => {

    const { data: service, isLoading, refetch } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            try {
                const res = await fetch('https://jerins-parlour-server-topaz.vercel.app/service', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('access-token')}`
                    }
                })
                const data = await res.json()
                return data;
            } catch (err) {

            }

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteService = service => {
        fetch(`https://jerins-parlour-server-topaz.vercel.app/service/${service._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch()
                    toast.success(`${service.name} deleted successfully`)
                }

            })
    }

    return (
        <div>
            <h2 className="text-3xl mb-5">Manage Services</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service?.map((serv, i) => <tr key={serv._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={serv.image} alt="" />
                                    </div>
                                </div> </td>
                                <td>{serv.name}</td>
                                <td>{serv.title}</td>

                                <td>
                                    <label onClick={() => handleDeleteService(serv)} className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageServices;