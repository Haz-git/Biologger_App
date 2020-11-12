import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';

//Styles:
const MainCalendarContainer = styled.div`
    padding: 20px 20px;
`

const Calendar = () => {
    return (
        <>
            <MainCalendarContainer>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView='dayGridMonth'
                    schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                    events={[
                        { title: 'Anniversary', start: '2020-11-13', end: '2020-11-16'},
                    ]}
                />
            </MainCalendarContainer>
        </>
    )
}

/*
Documentation:
https://fullcalendar.io/docs#toc


It seems like the events object can easily be saved to mongoDB for persistence... --> Using this strategy we can implement personal calendar..

*/

export default Calendar;
