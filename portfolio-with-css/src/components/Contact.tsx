
export default function ContactComponent() {

    return(
        <section id="contact">
            <div className="main-container">
                <div className="contact-container">
                    <h1 className="contact-me-title">Contact Me</h1>
                    <div className="contact-form">
                        <div>
                            <label htmlFor="yourname">Your Name</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="youremail">Your Email</label>
                            <input type="email" />
                        </div>

                        <div>
                            <label htmlFor="yourmessage">Your Message</label>
                            <textarea name="yourmessage" rows={6}></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="button">Send Message</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}