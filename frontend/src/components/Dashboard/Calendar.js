import React, { useState,useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

//Styles:
const MainCalendarContainer = styled.div`
    display: flex;
    padding: 20px 20px;
`
const SideBarContainer = styled.div`
    flex-grow: 1;
`

const CalendarContainer = styled.div`
    flex-grow: 3;
`

const Calendar = () => {

    const calendarComponentRef = React.useRef();

    const [ currentEvent, setCurrentEvent ] = useState('');
    const [ submittedEvents, setSubmittedEvents ] = useState([]);

    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function(eventEl) {
                let title = eventEl.getAttribute("title");
                let id = eventEl.getAttribute("id");
                return {
                    title,
                    id
                };
            }
        });
    },[])

    const handleFormChange = e => {
        e.preventDefault();
        setCurrentEvent(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setSubmittedEvents([...submittedEvents, {
            title: currentEvent,
            id: uuid(),
        }]);
        setCurrentEvent('')
        console.log(submittedEvents);
    }


    const renderSideBar = () => {
        return (
            <div id='external-events'>
                <h4>Your Events</h4>
                {submittedEvents.map(event => {
                    return (
                        <div
                            className="fc-event"
                            title={event.title}
                            id={event.id}
                            key={event.id}
                            style={{
                            marginBottom: "2px",
                            marginRight: "10px",
                            padding: "3px",
                            cursor: "pointer"
                            }}
                        >
                            {event.title}
                        </div>
                    );
                })}
            </div>
        )
    }


    return (
        <>
            <MainCalendarContainer>
                <SideBarContainer>
                    {renderSideBar()}
                    <form onSubmit={handleFormSubmit}>
                        <label>Add New Event</label>
                        <input type='text' onChange={handleFormChange} value={currentEvent}></input>
                        <button type='submit'>Submit</button>
                    </form>
                </SideBarContainer>
                <CalendarContainer>
                    <FullCalendar
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        ref={calendarComponentRef}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        selectMirror={true}
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
