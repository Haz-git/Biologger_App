import React from 'react';
import FullCalendar from '@fullcalendar/react';
import Draggable from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

//Styles:
const MainCalendarContainer = styled.div`
    display: flex;
    padding: 20px 20px;
`
const SideBarContainer = styled.div`
    flex-grow: 1;
`

const CalendarContainer = styled.div`
    flex-grow: 2;
`

const Calendar = () => {
    return (
        <>
            <MainCalendarContainer>
                <SideBarContainer>
                    sidebar should be here...
                </SideBarContainer>
                <CalendarContainer>
                    <FullCalendar
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        locale='us'
                        initialView='dayGridMonth'
                        headerToolbar={{
                            left:'prev,next',
                            center:'title',
                            right:'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                        events={[
                            { title: 'Anniversary', start: '2020-11-13', end: '2020-11-16'},
                        ]}
                    />
                </CalendarContainer>
            </MainCalendarContainer>
        </>
    )
}

/*
Documentation:
https://fullcalendar.io/docs#toc


It seems like the events object can easily be saved to mongoDB for persistence... --> Using this strategy we can implement personal calendar..https://fullcalendar.io/docs/event-object

*/

export default Calendar;
