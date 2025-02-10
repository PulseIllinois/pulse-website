import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./Events.module.css";

const EventCard = ({ title, time, location }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{time}</p>
      <p>{location}</p>
    </div>
  )
}

const data = [
  {
    day: 0,
    events: [
      {
        title: "Opening Ceremony + Merch Pickup",
        time: "5 - 6:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner (Jimmy John's)",
        time: "6 - 7:00 PM",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: 1,
    events: [
      {
        title: "Astera Labs Coffee Chat",
        time: "10 - 11:00 AM",
        location: "ECEB Atrium"
      },
      {
        title: "Tesla X WECE Coffee Chat",
        time: "3:30 - 4:30 PM",
        location: "ECEB 2013"
      },
      {
        title: "Astera Labs Tech Talk",
        time: "6 - 7:00 PM",
        location: "ECEB 1013"
      },
      {
        title: "Dinner (Chipotle)",
        time: "7 - 8:00 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 2,
    events: [
      {
        title: "Texas Instruments Coffee Chat",
        time: "10 - 11:00 AM",
        location: "ECEB Atrium"
      },
      {
        title: "Keynote Event",
        time: "5 - 6:00 PM",
        location: "ECEB 1002"
      },
      {
        title: "Dinner (Signature Grill)",
        time: "6 - 7:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Design Competition",
        time: "7:30 - 10 PM",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: 3,
    events: [
      {
        title: "Texas Instruments Tech Talk",
        time: "3 - 4:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Women in Academia Panel",
        time: "1 - 2:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "WIT Lunch (Subway)",
        time: "2 - 3:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Women in Tech Keynote with Professor Bernhard",
        time: "5:00 - 6:00 PM",
        location: "ECEB 1002"
      },
      {
        title: "Dinner (Papa Del's Pizza)",
        time: "6 - 7:00 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 4,
    events: [
      {
        title: "Software Competition",
        time: "4 - 6:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner (Mia Zia's Pasta for participants)",
        time: "6 - 7:00 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 5,
    events: [
      {
        title: "Hardware Competition",
        time: "10 AM - 7:00 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner (for participants)",
        time: "7 - 8:00 PM",
        location: "ECEB 3002"
      },
    ]
  }
]

function Events() {
  const [currentDay, setCurrentDay] = useState(0);
  const [eventData, setEventData] = useState(data[0].events);

  const handleClick = (day) => {
    setCurrentDay(day);
    let newData = data.filter((item) => item.day === day)[0].events;
    setEventData(newData);
  }

  const handleChange = (event) => {
    let day = event.target.value;
    handleClick(day);
  }

  return (<div>
    <div className={styles.container}>
      <div><h1>Event Schedule</h1>
     <a className={styles.link} href ="https://calendar.google.com/calendar/u/4?cid=Mjg4YzJjYWRkYTk5ZDkzODhmY2NhMmU1ZGI2MzFjNzQ3NTQyOWEwMjk2MGNhY2MwY2M5NTZlNjE1NzNmNzVjNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank" rel="noopener noreferrer">
        <h2>Google Calendar</h2></a> </div>      
        <div className={styles.btnContainer}>
        <button onClick={() => handleClick(0)} className={`${styles.dayBtn} ${currentDay === 0 ? styles.active : ''}`}>February 10th<br /> (Monday)</button>
        <button onClick={() => handleClick(1)} className={`${styles.dayBtn} ${currentDay === 1 ? styles.active : ''}`}>February 11th <br /> (Tuesday)</button>
        <button onClick={() => handleClick(2)} className={`${styles.dayBtn} ${currentDay === 2 ? styles.active : ''}`}>February 12th <br /> (Wednesday)</button>
        <button onClick={() => handleClick(3)} className={`${styles.dayBtn} ${currentDay === 3 ? styles.active : ''}`}>February 13th<br /> (Thursday)</button>
        <button onClick={() => handleClick(4)} className={`${styles.dayBtn} ${currentDay === 4 ? styles.active : ''}`}>February 14th <br /> (Friday)</button>
        <button onClick={() => handleClick(5)} className={`${styles.dayBtn} ${currentDay === 5 ? styles.active : ''}`}>February 15th <br /> (Saturday)</button>
      </div>

      
      <div className={styles.mobileBtn}>
        <FormControl
          fullWidth
          sx={{
            borderColor: "white",
            color: "white",
          }}
        >
          <InputLabel sx={{ color: "white" }} id="day-label">Day</InputLabel>
          <Select
            labelId="day-label"
            id="day-select"
            value={currentDay}
            defaultValue={0}
            label="Age"
            onChange={handleChange}
            sx={{
              borderColor: "white",
              color: "white",
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                borderWidth: '0.15rem',
              },
            }}
          >
            <MenuItem value={0}>February 10th <br /> (Monday)</MenuItem>
            <MenuItem value={1}>February 11th <br /> (Tuesday)</MenuItem>
            <MenuItem value={2}>February 12th <br /> (Wednesday)</MenuItem>
            <MenuItem value={3}>February 13th <br /> (Thursday)</MenuItem>
            <MenuItem value={4}>February 14th <br /> (Friday)</MenuItem>
            <MenuItem value={5}>February 15th <br /> (Saturday)</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.row}>
        {eventData.map((item) => (
          <EventCard className = {styles.card}
            key={`${item.title} ${item.time}`}
            title={item.title}
            time={item.time}
            location={item.location}
          />
        ))}
      </div></div>
      </div>
  )
}

export default Events
