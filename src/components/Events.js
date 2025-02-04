import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Footer from "./Footer";
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
        title: "Opening Ceremony + Swag Pickup",
        time: "5 - 5:30 PM",
        location: "ECEB 3002"
      },
      {
        title: "Lightning Talk with Nick Chagin",
        time: "5:30 - 6 PM",
        location: "ECEB 3002"
      },
      {
        title: "Lightning Talks with Capital One",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner",
        time: "7 - 8 PM",
        location: "Subway - ECEB 3002"
      },
    ]
  },
  {
    day: 1,
    events: [
      {
        title: "Coffee Chat with Texas Instruments",
        time: "10 - 11 AM",
        location: "ECEB 1000/Atrium"
      },
      {
        title: "Snack",
        time: "5:30 - 6 PM",
        location: "ECEB 1013"
      },
      {
        title: "Tech Talk with Brandon Dohman",
        time: "6 - 7 PM",
        location: "ECEB 1013"
      },
      {
        title: "Dinner - Jimmy Johns",
        time: "7 - 8 PM",
        location: "ECEB 1013"
      }
    ]
  },
  {
    day: 2,
    events: [
      {
        title: "Keynote - Naweed Anjum",
        time: "5 - 6 PM",
        location: "Grainger Auditorium"
      },
      {
        title: "Dinner - Signature Grill",
        time: "6 - 6:45 PM",
        location: "ECEB 3002"
      },
      {
        title: "Design Competition with Late Night Snack",
        time: "7 - 9 PM",
        location: "ECEB 3002"
      },
      {
        title: "Late Night Snack (for participants)",
        time: "8:30 - 9 PM",
        location: "ECEB 3002"
      },

    ]
  },
  {
    day: 3,
    events: [
      {
        title: "Lunch & Lightning Talks - Panera",
        time: "12 - 1:30 PM",
        location: "ECEB 3002"
      },
      {
        title: "Women in Academia Panel",
        time: "1:30 - 2:30 PM",
        location: "ECEB 3002"
      },
      {
        title: "Keynote with Dinner - Nivi Baral",
        time: "5 - 7 PM",
        location: "ECEB 3002 - Papa Dels"
      }
    ]
  },
  {
    day: 4,
    events: [
      {
        title: "Opportunities Fair",
        time: "1 - 3 PM",
        location: "ECEB 1000/Atrium"
      },
      {
        title: "Software Competition with Dinner",
        time: "4 - 6 PM",
        location: "Grainger Auditorium - Fazolis"
      },
      {
        title: "Dinner - Fazolis (for participants)",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Soldering Workshop - HKN",
        time: "7 - 9 PM",
        location: "ECEB 1001"
      },
    ]
  },
  {
    day: 5,
    events: [
      {
        title: "Hardware Competition",
        time: "10 AM - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Breakfast (for participants)",
        time: "10 - 11 AM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner - Dominoes (for participants)",
        time: "5 - 6 PM",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: 6,
    events: [
      {
        title: "High School Day",
        time: "9 AM - 2 PM",
        location: "ECEB"
      },
      {
        title: "Meet and Greet (Snacks Provided)",
        time: "9 - 9:30 AM",
        location: "ECEB 3002"
      },
      {
        title: "ECEB Tour",
        time: "9:30 AM - 10 AM",
        location: "ECEB 3002"
      },
      {
        title: "Coding Workshop 1",
        time: "10 - 11 AM",
        location: "ECEB 2022/3022"
      },
      {
        title: "Coding Workshop 2",
        time: "11 AM - 12 PM",
        location: "ECEB 2022/3022"
      },
      {
        title: "Speakers + Lunch - Dominoes",
        time: "12 - 1 PM",
        location: "ECEB 3002"
      },
      {
        title: "Competitions\n(with Prizes)",
        time: "1 - 2 PM",
        location: "ECEB 3002"
      }
    ]
  },
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
        <button onClick={() => handleClick(0)} className={`${styles.dayBtn} ${currentDay === 0 ? styles.active : ''}`}>February 10th</button>
        <button onClick={() => handleClick(1)} className={`${styles.dayBtn} ${currentDay === 1 ? styles.active : ''}`}>February 11th</button>
        <button onClick={() => handleClick(2)} className={`${styles.dayBtn} ${currentDay === 2 ? styles.active : ''}`}>February 12th</button>
        <button onClick={() => handleClick(3)} className={`${styles.dayBtn} ${currentDay === 3 ? styles.active : ''}`}>February 13th</button>
        <button onClick={() => handleClick(4)} className={`${styles.dayBtn} ${currentDay === 4 ? styles.active : ''}`}>February 14th</button>
        <button onClick={() => handleClick(5)} className={`${styles.dayBtn} ${currentDay === 5 ? styles.active : ''}`}>February 15th</button>
        <button onClick={() => handleClick(6)} className={`${styles.dayBtn} ${currentDay === 6 ? styles.active : ''}`}>February 16th</button>
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
            <MenuItem value={0}>February 10th</MenuItem>
            <MenuItem value={1}>February 11th</MenuItem>
            <MenuItem value={2}>February 12th</MenuItem>
            <MenuItem value={3}>February 13th</MenuItem>
            <MenuItem value={4}>February 14th</MenuItem>
            <MenuItem value={5}>February 15th</MenuItem>
            <MenuItem value={6}>February 16th</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.row}>
        {eventData.map((item) => (
          <EventCard
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
