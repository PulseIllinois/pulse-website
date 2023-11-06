import Footer from "./Footer";
import GroupPics from "./GroupPics";
import styles from "./OurTeam.module.css";

const directors =
{
  title: "Co-Directors",
  members: [
    {
      name: "Gagan Kadadevarmath",
      img: require("../assets/2023/team/gagan.png")
    },
    {
      name: "Shreya Patil",
      img: require("../assets/2023/team/shreya.png")
    },
  ]
}

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

const treasurer =
{
  title: "Treasurer",
  members: [
    {
      name: "Sanjiv Iyer",
      img: require("../assets/2023/team/sanjiv.png")
    }
  ]
}

const corporate =
{
  title: "Corporate Directors",
  members: [
    {
      name: "Sumedh Vaidyanathan",
      img: require("../assets/2023/team/sumedh.png")
    },
    {
      name: "Ravi Thakkar",
      img: require("../assets/2023/team/ravi.png")
    },
    // {
    //   name: "Rohan Vasavada",
    //   img: require("../assets/2023/team/rohan.png")
    // },
    {
      name: "Manas Anand",
      img: require("../assets/2023/team/manas.png")
    },
  ]
}

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

const technical =
{
  title: "Technical Directors",
  members: [
    {
      name: "Megna Biederman",
      img: require("../assets/2023/team/megna.png")
    },
    {
      name: "Vinayak Bagdi",
      img: require("../assets/2023/team/vinayak.png")
    },
    {
      name: "Justin Chen",
      img: require("../assets/2023/team/justin.png")
    }
  ]
}

const competitions =
{
  title: "Competitions Directors",
  members: [
    {
      name: "Jack Gauer",
      img: require("../assets/2023/team/jack_g.png")
    },
    {
      name: "Jack Viebrock",
      img: require("../assets/2023/team/jack_v.png")
    },
  ]
}

const media_design =
{
  title: "Media & Design Directors",
  members: [
    {
      name: "Ritvik Gandesiri",
      img: require("../assets/2023/team/ritvik.png")
    },
    {
      name: "Meghana Pothukuchi",
      img: require("../assets/2023/team/meghu.png")
    },
  ]
}

const social_media =
{
  title: "Social Media",
  members: [
    {
      name: "Anushya Iyer",
      img: require("../assets/2023/team/anushya.png")
    }
  ]
}

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