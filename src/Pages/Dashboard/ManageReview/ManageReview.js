import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const ManageReview = () => {
    const { data: review, isLoading, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            try {
                const res = await fetch('https://jerins-parlour-server-topaz.vercel.app/review', {
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
    return (
        <div>
            <h2 className="text-3xl mb-5">Manage Review</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    review?.map(re => <div className={`card p-6 text-white md:card-side  shadow-xl bg-primary`}>
                        <div className="card-body">

                            <h2 className="card-title">{re.title}</h2>
                            <p>Name : {re.name}</p>
                            <p>{re.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ManageReview;