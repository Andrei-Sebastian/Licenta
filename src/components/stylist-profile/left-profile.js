import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  EditRecurrenceMenu,
  DragDropProvider 
} from '@devexpress/dx-react-scheduler-material-ui';


const appointments = [];
const Demo = () => {

    const [appointment, setAppoiment] = useState([...appointments]);
    const [currentDate, setCurrentDate] = useState(new Date());

    const currentDateChange = (currentDate) => { setCurrentDate(currentDate); };
 
    const commitChanges = ({ added, changed, deleted }) => {
        console.log(added)
        if(currentDate.getDate() <= new Date().getDate()) {
            let  data  = appointment;
        if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
        data = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
        }
        setAppoiment(data)
        }
        
    }
    const [addedAppointment, setAddedAppointment] = useState({});
    const onAddedAppointmentChange = React.useCallback((appointment) => {
        setAddedAppointment(appointment);
        setIsAppointmentBeingCreated(true);
      });
      const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = React.useState(false);

      
    return (
        <Paper>
        <Scheduler
            data={appointment}
            height={600}
        >
            <ViewState
            currentDate={currentDate}
            onCurrentDateChange={ currentDateChange}
            />
        <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
            // editingAppointment={()=>{console.log("here")}}
            />
            <EditRecurrenceMenu />
            <IntegratedEditing />
            <WeekView
            startDayHour={9}
            endDayHour={19}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip
            showOpenButton
            showDeleteButton
            />
            <AppointmentForm />
            <DragDropProvider/>
        </Scheduler>
        </Paper>
    );

}  

export default Demo;

