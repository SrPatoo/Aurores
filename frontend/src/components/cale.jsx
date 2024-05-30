 
"use client";
 
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
 
const Calendar = () => {
  return (
   
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="mr-20 ">
          <br></br>
          <Timeline.Time>Febrer 2022</Timeline.Time>
          <Timeline.Title>Plantejem la Idea</Timeline.Title>
          <Timeline.Body>
            Començem a imaginar-nos com fer realitat el projecte
          </Timeline.Body>
         
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="mr-20">
        <br></br>
          <Timeline.Time>Juny 2022</Timeline.Time>
          <Timeline.Title>Tramits</Timeline.Title>
          <Timeline.Body >
            Comencem amb el tramit del nom, el lloc, l'equip...
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="mr-15 ">
        <br></br>
          <Timeline.Time>Decembre 2022</Timeline.Time>
          <Timeline.Title>Obertura</Timeline.Title>
          <Timeline.Body >
          Finalment vam aconseguir fer realitat el nostre estimat projecte
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
   
  );
}
export default Calendar;