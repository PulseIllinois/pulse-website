import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { jsx } from "@emotion/core";
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
        location: "Grainger Auditorium"
      },
      {
        title: "Lightning Talks",
        time: "5:30 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner: Sponsored by Capital One",
        time: "7 - 8 PM",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: 1,
    events: [
      {
        title: "Coffee Chat with Texas Instruments",
        time: "10 - 11 AM",
        location: "Atrium"
      },
      {
        title: "Snack",
        time: "5 - 6 PM",
        location: "ECEB 3002"
      },
      {
        title: "Tech Talk",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Meet & Greet",
        time: "7 - 8 PM",
        location: "Atrium"
      },
      {
        title: "Dinner",
        time: "8 - 9 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 2,
    events: [
      {
        title: "Coffee Chat",
        time: "10 - 11 AM",
        location: "Atrium"
      },
      {
        title: "Keynote",
        time: "5 - 6 PM",
        location: "Grainger Auditorium"
      },
      {
        title: "Dinner",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Design Competition",
        time: "7 - 9 PM",
        location: "ECEB 3002"
      },
      {
        title: "Late Snack",
        time: "8:30 - 9 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 3,
    events: [
      {
        title: "Lunch + Speakers",
        time: "12 - 1:30 PM",
        location: "ECEB 3002"
      },
      {
        title: "Women in Academia Panel",
        time: "1:30 - 2:30 PM",
        location: "ECEB 3002"
      },
      {
        title: "Social/Snack Break",
        time: "4 - 5 PM",
        location: "ECEB 3002"
      },
      {
        title: "Keynote",
        time: "5 - 6 PM",
        location: "ECEB 3002"
      },
      {
        title: "Dinner: Sponsored by AMD",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: 4,
    events: [
      {
        title: "Recruiting Fair",
        time: "1 - 3 PM",
        location: "ECEB 1000/Atrium"
      },
      {
        title: "Software Competition",
        time: "4 - 6 PM",
        location: "Grainger Auditorium"
      },
      {
        title: "Dinner",
        time: "6 - 7 PM",
        location: "ECEB 3002"
      },
      {
        title: "Soldering Workshop - HKN",
        time: "7 - 9 PM",
        location: "ECEB 4072"
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
        title: "Dinner (participants only)",
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
        title: "Speakers + Lunch",
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
    setEventData();
    setEventData(newData);
  }

  const handleChange = (event) => {
    let day = event.target.value;
    handleClick(day);
  }

  return (
    <div className={styles.container}>
      <h1>Event Schedule</h1>
      <div className={styles.btnContainer}>
        <button onClick={() => handleClick(0)} className={`${styles.dayBtn} ${currentDay === 0 ? styles.active : ''}`}>February 6th</button>
        <button onClick={() => handleClick(1)} className={`${styles.dayBtn} ${currentDay === 1 ? styles.active : ''}`}>February 7th</button>
        <button onClick={() => handleClick(2)} className={`${styles.dayBtn} ${currentDay === 2 ? styles.active : ''}`}>February 8th</button>
        <button onClick={() => handleClick(3)} className={`${styles.dayBtn} ${currentDay === 3 ? styles.active : ''}`}>February 9th</button>
        <button onClick={() => handleClick(4)} className={`${styles.dayBtn} ${currentDay === 4 ? styles.active : ''}`}>February 10th</button>
        <button onClick={() => handleClick(5)} className={`${styles.dayBtn} ${currentDay === 5 ? styles.active : ''}`}>February 11th</button>
        <button onClick={() => handleClick(6)} className={`${styles.dayBtn} ${currentDay === 6 ? styles.active : ''}`}>February 12th</button>
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
            <MenuItem value={0}>February 6th</MenuItem>
            <MenuItem value={1}>February 7th</MenuItem>
            <MenuItem value={2}>February 8th</MenuItem>
            <MenuItem value={3}>February 9th</MenuItem>
            <MenuItem value={4}>February 10th</MenuItem>
            <MenuItem value={5}>February 11th</MenuItem>
            <MenuItem value={6}>February 12th</MenuItem>
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
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export default Events