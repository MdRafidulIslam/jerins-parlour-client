
import React from 'react';
import { DayPicker } from 'react-day-picker';
import bannerImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-8'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-8'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate} />

                    </div>

                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;