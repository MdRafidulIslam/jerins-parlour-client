import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState({})
    const date = format(selectedDate, 'PPPP')

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['services', date],
        queryFn: async () => {
            const res = await fetch(`https://jerins-parlour-server-topaz.vercel.app/services?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Appointments Booking on {format(selectedDate, 'PPPP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    appointmentOption.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;