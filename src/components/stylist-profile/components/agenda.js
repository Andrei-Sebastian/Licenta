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
import axios from 'axios';

const Agenda = ({user = false}) => {

    const [appointment, setAppoiment] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [uid, setUid] = useState();

    useEffect(() => {
        const getData = async () => {
            let uid = window.location.href.split("/")[window.location.href.split("/").length - 1];
            setUid(uid);
            let app;
            if(user) {
                app = await axios.get(`http://localhost:8080/getAppointment`,
                { 
                    params: {
                        uid: uid
                    },
                    headers: {
                        Authorization: localStorage.getItem("user-info"),
                    }
                });
            } else {
                app = await axios.get(`http://localhost:8080/getAppointment`,
                {
                    headers: {
                        Authorization: localStorage.getItem("user-info"),
                    }
                });
            }
            
            setAppoiment(app.data);
        }
        getData();
        return () => {
            console.log('This will be logged on unmount');
        };
    }, []);

    const currentDateChange = (currentDate) => { setCurrentDate(currentDate); };
 
    const commitChanges = async ({ added, changed, deleted }) => {
        // console.log(changed)
        // if(currentDate.getDate() <= new Date().getDate()) {
        let  data  = [...appointment];
        let object = {};

        if (added) {
            if (new Date(added.startDate) > new Date()) {
                object = { 
                    id: data.length > 0 ? data[data.length - 1].id + 1 : 0,
                    ...added 
                }
                let uid = window.location.href.split("/")[window.location.href.split("/").length - 1];
                if (user) { 
                    try {
                    await axios.post(`http://localhost:8080/createAppointment`,
                    {
                        appointments: object,
                        uid: uid
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("user-info"),
                        }
                    });
                    data.push(object); 
                    } catch (e) {
                        alert("You already have an appointment!!")
                    }
    
                } else {
                    await axios.post(`http://localhost:8080/createAppointment`,
                    {
                        appointments: object
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("user-info"),
                        }
                    });
                    data.push(object);
                }
                
            } else {
                alert("You can't add an appointment in past!!");
            }
           

        } else if (changed) {
            // data.map(appointment => (
            //     changed[appointment.id] && (object = { ...appointment, ...changed[appointment.id] }) 
            // ));

            // await axios.post(`http://localhost:8080/editAppointment`,
            // {
            //     appointments: object
            // },
            // {
            //     headers: {
            //         Authorization: localStorage.getItem("user-info"),
            //     }
            // });
            // console.log("here")

            // data = data.map(appointment => (
            //     changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            // console.log(data)

        } else if (deleted !== undefined && !user) {
            object = data.filter(appointment => appointment.id == deleted)[0];

            await axios.post(`http://localhost:8080/deleteAppointment`,
            {
                appointments: object
            },
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            });
            data = data.filter(appointment => appointment.id !== deleted);
        } else if (deleted !== undefined && user) {
            alert("You don't have acces to delete an appointment");
        }
        
        setAppoiment(data)
        // }
        
    }
    const [addedAppointment, setAddedAppointment] = useState({});
    const onAddedAppointmentChange = React.useCallback((appointment) => {
        setAddedAppointment(appointment);
        // setIsAppointmentBeingCreated(true);
      });
    //   const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = React.useState(false);

      
    return (
        <Paper>
        <Scheduler
            data={appointment}
        >
            <ViewState
            currentDate={currentDate}
            onCurrentDateChange={ currentDateChange}
            />
        {user ?
        <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
            // editingAppointment={()=>{console.log("here")}}
            /> :
            <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
            // editingAppointment={()=>{console.log("here")}}
            />}
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
            {/* <DragDropProvider/> */}
        </Scheduler>
        </Paper>
    );

}  

export default Agenda;

