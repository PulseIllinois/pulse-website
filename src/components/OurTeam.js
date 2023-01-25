import Footer from "./Footer";
import GroupPics from "./GroupPics";
import styles from "./OurTeam.module.css";

const directors =
{
  title: "Co-Directors",
  members: [
    {
      name: "Gagan Kadadevarmath",
      img: require("../assets/team/gagan.png")
    },
    {
      name: "Shreya Patil",
      img: require("../assets/team/shreya.png")
    },
  ]
}

const secretary =
{
  title: "Secretary",
  members: [
    {
      name: "Steffi Chen",
      img: require("../assets/team/steffi.png")
    }
  ]
}

const treasurer =
{
  title: "Treasurer",
  members: [
    {
      name: "Sanjiv Iyer",
      img: require("../assets/team/sanjiv.png")
    }
  ]
}

const corporate =
{
  title: "Corporate Directors",
  members: [
    {
      name: "Sumedh Vaidyanathan",
      img: require("../assets/team/sumedh.png")
    },
    {
      name: "Ravi Thakkar",
      img: require("../assets/team/ravi.png")
    },
    {
      name: "Rohan Vasavada",
      img: require("../assets/team/rohan.png")
    },
    {
      name: "Manas Anand",
      img: require("../assets/team/manas.png")
    },
  ]
}

const wit =
{
  title: "Women in Tech Directors",
  members: [
    {
      name: "Niharika ChintalapatiI",
      img: require("../assets/team/neha.png")
    },
    {
      name: "Manogna Rajanala",
      img: require("../assets/team/manogna.png")
    },
  ]
}

const technical =
{
  title: "Technical Directors",
  members: [
    {
      name: "Megna Biederman",
      img: require("../assets/team/megna.png")
    },
    {
      name: "Vinayak Bagdi",
      img: require("../assets/team/vinayak.png")
    },
    {
      name: "Justin Chen",
      img: require("../assets/team/justin.png")
    }
  ]
}

const competitions =
{
  title: "Competitions Directors",
  members: [
    {
      name: "Jack Gauer",
      img: require("../assets/team/jack_g.png")
    },
    {
      name: "Jack Viebrock",
      img: require("../assets/team/jack_v.png")
    },
  ]
}

const media_design =
{
  title: "Media & Design Directors",
  members: [
    {
      name: "Ritvik Gandesiri",
      img: require("../assets/team/ritvik.png")
    },
    {
      name: "Meghana Pothukuchi",
      img: require("../assets/team/meghu.png")
    },
  ]
}

const social_media =
{
  title: "Social Media",
  members: [
    {
      name: "Anushya Iyer",
      img: require("../assets/team/anushya.png")
    }
  ]
}

const marketing =
{
  title: "Marketing",
  members: [
    {
      name: "Akshat Singh",
      img: require("../assets/team/akshat.png")
    }
  ]
}


function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>
      <div className={styles.row}>
        <GroupPics title={directors.title} data={directors.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={secretary.title} data={secretary.members} />
        <GroupPics title={treasurer.title} data={treasurer.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={technical.title} data={technical.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={corporate.title} data={corporate.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={competitions.title} data={competitions.members} />
        <GroupPics title={wit.title} data={wit.members} />
      </div>

      <div className={styles.row}>
        <GroupPics title={media_design.title} data={media_design.members} />
        <GroupPics title={social_media.title} data={social_media.members} />
        <GroupPics title={marketing.title} data={marketing.members} />
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export default OurTeam