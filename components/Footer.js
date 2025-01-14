import styles from './css/footer.module.css'
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className={styles.footer}>
            <h1>INFO</h1> <br></br>
            <h3>
                This Is the portfolio of sarvagya singh and a entry for Nexus BIT Sindhri 
            </h3>
             <p>&copy; {currentYear} Sarvagya All Rights Reserved.</p>
        </div>
    )
}