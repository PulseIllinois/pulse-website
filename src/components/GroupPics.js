import styles from "./GroupPics.module.css"

function GroupPics({ title, data }) {
  const members = data;

  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.row}>
        {members.map(({ name, img }) => (
          <div key={name} className={styles.picContainer}>
            <div className={styles.frame}>
              <img src={img} alt={name} />
            </div>
            <div className={styles.caption}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupPics