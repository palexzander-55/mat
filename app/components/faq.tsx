import styles from './faq.module.css'

export interface FaqProps {
    questions: [question: string, answer: string][]
}


export default function FAQ({ faqProp }: { faqProp: FaqProps }) {
    return (
        <main className={styles.faq}>
            <div className={styles.faq__holder}>
                <h1 className={styles.faq__heading}>FAQ</h1>
                {
                    faqProp.questions.map((value, index) => {
                        return (
                            <details className={styles.faq__detail} key={index}>
                                <summary className={styles.faq__summary}>
                                    <span className={styles.faq__question}>{value[0]}</span>
                                </summary>
                                <p className={styles.faq__text}>{value[1]}</p>
                            </details>
                        );
                    })
                }

                {/* <details className={styles.faq__detail}>
                    <summary className={styles.faq__summary}><span className={styles.faq__question}>How many team members can I invite?</span></summary>
                    <p className={styles.faq__text}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                </details>

                <details className={styles.faq__detail}>
                    <summary className={styles.faq__summary} ><span className={`${styles.faq__question} `} >What is the maximum file upload size?</span></summary>
                    <p className={styles.faq__text}>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </details>

                <details className={styles.faq__detail}>
                    <summary className={styles.faq__summary}><span className={styles.faq__question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus necessitatibus nobis natus tempore accusamus, mollitia, libero minus exercitationem doloribus nulla hic. Vitae porro nostrum magni ut unde, sequi ipsa.</span></summary>
                    <p className={styles.faq__text}>Click “Forgot password” from the login page or “Change password” from your profile page.</p>
                    <p className={styles.faq__text}>A reset link will be emailed to you.</p>
                </details>

                <details className={styles.faq__detail}>
                    <summary className={styles.faq__summary}><span className={styles.faq__question}>Can I cancel my subscription?</span></summary>
                    <p className={styles.faq__text}>Yes! Send us a message and we’ll process your request no questions asked.</p>
                </details>

                <details className={styles.faq__detail}>
                    <summary className={styles.faq__summary}><span className={styles.faq__question}>Do you provide additional support?</span></summary>
                    <p className={styles.faq__text}>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                </details> */}
            </div>
        </main>
    );
}