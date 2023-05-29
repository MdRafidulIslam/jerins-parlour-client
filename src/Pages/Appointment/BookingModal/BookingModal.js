import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PPPP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name1 = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            selectedDate: date,
            treatment: name,
            patient: name1,
            email,
            slot,
            phone,
            price
        }

        fetch('https://jerins-parlour-server-topaz.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success(`${booking.patient} Booking Confirmed`)
                    refetch()
                } else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-4 grid-cols-1 mt-11'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} disabled readOnly className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        {user && <input type="submit" value="Submit" className='btn btn-primary w-full' />}
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;