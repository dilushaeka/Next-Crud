import styles from "./transaction.module.css"
const Card = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> newest transations</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <img src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />dilu </div>
                        </td> 
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>08.02.2024</td>
                        <td>RS 5.345</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                            <img src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> dilu</div>
                        </td> 
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelld
                            </span>
                        </td>
                        <td>08.02.2024</td>
                        <td>RS 5.345</td>
                    </tr>

                    <tr>
                        <td>
                        <div className={styles.user}>
                            <img src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />dilu </div>
                        </td> 
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                pending
                            </span>
                        </td>
                        <td>08.02.2024</td>
                        <td>RS 5.345</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Card
