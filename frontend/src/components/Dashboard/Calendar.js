import React, { useState,useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { addNewEvent } from '../../redux/userCalendar/calendarActions';
import { MdCancel } from 'react-icons/md';
import { IconContext } from 'react-icons';


//Styles:
const MainCalendarContainer = styled.div`
    display: flex;
    padding: 20px 20px;
`
const SideBarContainer = styled.div`
    flex-grow: .2;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: rgba(44,62,80, 0.8);
    margin-right: 20px;
    border-radius: 8px;
    max-height: 800px;
`

const SideBarHeader = styled.h2`
    color: white;
    font-family: 'Nunito', sans-serif;
`

const CalendarContainer = styled.div`
    flex-grow: 3;
`

const StyledInput = styled.input`
    height: 25px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid white;
    &:focus {
        outline:none;
    }

`
const StyledButton = styled.button`
    height: 29px;
    background-color: rgb(30, 43, 55);
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgb(30, 43, 55);
    cursor: pointer;
    &:focus {
        outline:none;
    }
`

const StyledEventCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    background-color: rgb(55, 136, 216);
    border: 1px solid rgb(55, 136, 216);
    color: white;
    text-align: center;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SubmittedEventContainer = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`




//Render:

const Calendar = ({ addNewEvent }) => {

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

    const handleEventClick = clickInfo => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}' ?`)) {
            clickInfo.event.remove();
            //Add path to DB later
        }
    }

    const handleEventCardDelete = eventId => {
        setSubmittedEvents(submittedEvents.filter(event => (event.id !== eventId)));
    }

    const handleEventReceive = info => {
        //Only submit the event object to action creator:
        addNewEvent(info.event);
    }


    const renderSideBar = () => {
        return (
            <SubmittedEventContainer id='external-events'>
                {submittedEvents.map(event => {
                    return (
                        <StyledEventCard
                            className="fc-event"
                            title={event.title}
                            id={event.id}
                            key={event.id}
                        >
                            {event.title}
                            <button onClick={() => handleEventCardDelete(event.id)}>
                            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                                <div>
                                    <MdCancel />
                                </div>
                            </IconContext.Provider>
                            </button>
                        </StyledEventCard>
                    );
                })}
            </SubmittedEventContainer>
        )
    }


    return (
        <>
            <MainCalendarContainer>
                <SideBarContainer>
                    <form onSubmit={handleFormSubmit}>
                        <SideBarHeader>Add New Events</SideBarHeader>
                        <StyledInput type='text' onChange={handleFormChange} value={currentEvent}></StyledInput>
                        <StyledButton type='submit'>Submit</StyledButton>
                    </form>
                    <hr />
                    {renderSideBar()}
                </SideBarContainer>
                <CalendarContainer>
                    <FullCalendar
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        ref={calendarComponentRef}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        selectMirror={true}
                        height='800px'
                        locale='us'
                        initialView='dayGridMonth'
                        eventClick={handleEventClick}
                        headerToolbar={{
                            left:'prev,next,today',
                            center:'title',
                            right:'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        eventReceive={handleEventReceive}
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


We are now moving on to persisting this calendar data to mdb. We will use the eventRecieve to dispatch a POST request to our server...
*/
export default connect(null, { addNewEvent })(Calendar);
