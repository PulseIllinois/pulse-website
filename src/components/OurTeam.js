import Footer from "./Footer";
import GroupPics from "./GroupPics";
import styles from "./OurTeam.module.css";

const directors =
{
  title: "Co-Directors",
  members: [
    {
      name: "Ben Blade",
      img: require("../assets/2025/team/ben.jpeg")
    },
    {
      name: "Akshat Singh",
      img: require("../assets/2025/team/akshat.jpeg")
    },
  ]
}

/**
const secretary =
{
  title: "Secretary",
  members: [
    {
      name: "Steffi Chen",
      img: require("../assets/2023/team/steffi.png")
    }
  ]
}
*/

const treasurer =
{
  title: "Treasurer",
  members: [
    {
      name: "Cameron Marchese",
      img: require("../assets/2025/team/cameron.jpeg")
    }
  ]
}

const corporate =
{
  title: "Corporate & Networking Directors",
  members: [
    {
      name: "Konark Dhingreja",
      img: require("../assets/2025/team/konark.png")
    },
    {
      name: "Stephanie Eze",
      img: require("../assets/2025/team/stephanie.jpeg")
    }
  ]
}

/**
const wit =
{
  title: "Women in Tech Directors",
  members: [
    // {
    //   name: "Niharika ChintalapatiI",
    //   img: require("../assets/2023/team/neha.png")
    // },
    {
      name: "Manogna Rajanala",
      img: require("../assets/2023/team/manogna.png")
    },
  ]
}
*/

const technical =
{
  title: "Technical Directors",
  members: [
    {
      name: "Aryan Gosaliya",
      img: require("../assets/2025/team/aryan.png")
    },
    {
      name: "Avaneesh Kumar",
      img: require("../assets/2025/team/avaneesh.jpeg")
    }
  ]
}

const competitions =
{
  title: "Competitions Directors",
  members: [
    {
      name: "Ananya Krishnan",
      img: require("../assets/2025/team/ananya.jpeg")
    },
    {
      name: "Mithesh Ballae",
      img: require("../assets/2025/team/mithesh.png")
    },
  ]
}

const logistics =
{
  title: "Logistics Directors",
  members: [
    {
      name: "Jack Gauer",
      img: require("../assets/2025/team/jack.jpeg")
    },
    {
      name: "Justin Chen",
      img: require("../assets/2025/team/justin.jpeg")
    },
  ]
}

const social_media_marketing =
{
  title: "Social Media & Marketing Director",
  members: [
    {
      name: "Riya Karkhanis",
      img: require("../assets/2025/team/riya.jpeg")
    }
  ]
}

/**
const marketing =
{
  title: "Marketing",
  members: [
    {
      name: "Akshat Singh",
      img: require("../assets/2023/team/akshat.png")
    }
  ]
}
*/


function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>
      <div className={styles.row}>
        <GroupPics title={directors.title} data={directors.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={treasurer.title} data={treasurer.members} />
        <GroupPics title={technical.title} data={technical.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={corporate.title} data={corporate.members} />
        <GroupPics title={social_media_marketing.title} data={social_media_marketing.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={logistics.title} data={logistics.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={competitions.title} data={competitions.members} />
      </div>

      <Footer className={styles.footer} />
    </div>
  )
}

export default OurTeam