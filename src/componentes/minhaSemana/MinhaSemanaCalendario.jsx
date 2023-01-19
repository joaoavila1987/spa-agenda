import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
//import {useState , useEffect} from 'react';

export default function MinhaSemanaCalendario() {


    const handleDate = (event) => {
        console.log('dados -> ', event)
    }

    return (
        <>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={(e) => handleDate(e)}
                initialView={'dayGridWeek'}
            />
        </>
    )
}
