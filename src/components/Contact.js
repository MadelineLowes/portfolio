import React from 'react';

const styles = {
    background: {
        background: 'rgb(249, 239, 197)',
    },
    button: {
        background: 'rgb(78, 115, 140)',
        color: 'rgb(246, 246, 237)'
    },
    form: {
        background: 'rgb(191, 208, 212)'
    },
    input: {
        background: 'rgb(246, 246, 237)'
    },
    text: {
        color: 'rgb(75, 75, 75)'
    }
};

export default function Contact() {
    return (
        <div class="h-100" style={styles.background}>
            <h2 class="p-5" style={styles.text}>Contact Me</h2>
            <div class="d-lg-flex px-3">
                <card class="card col-lg-6 m-auto" style={styles.form}>
                    <form class="form-group p-3 needs-validation" novalidate autoComplete='on'>
                        <div class="mb-3">
                            <input type="text" class="form-control" style={styles.input} id="name" placeholder="Name" required />
                            <div class="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" style={styles.input} id="email" placeholder="Email address" required />
                            <div class="invalid-feedback">
                                Please provide your email.
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" style={styles.input} id="subject" placeholder="Subject" required />
                            <div class="invalid-feedback">
                                Please provide an email subject.
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" style={styles.input} id="message" placeholder="Message" rows="3"
                                required></textarea>
                            <div class="invalid-feedback">
                                Please provide a message.
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <button type="submit" class="btn" id="email-btn" style={styles.button}>Send email</button>
                        </div>
                    </form>
                </card>
                <nav class="col-lg-3 m-auto">
                    <address class=" m-3">
                        {/* <i class="fas fa-phone-alt fa-lg m-3" style="color:slategray"></i> */}
                        <a href="tel:6479812121" class="text-decoration-none" style={styles.text}>+1 (647) 981-2121</a>
                    </address>
                    <address class=" m-3" style={styles.text}>
                        {/* <i class="fas fa-map-pin fa-lg m-3" style="color:slategray"></i> */}
                        655 Vanessa Crescent <br />
                        Mississauga, ON L5H
                        2N5 <br /> Canada
                    </address>
                    <address class=" m-3">
                        {/* <i class="fas fa-envelope fa-lg m-3" style="color:slategray"></i> */}
                        <a href="mailto:madeline.e.lowes@gmail.com" class="text-decoration-none" style={styles.text}>madeline.e.lowes@gmail.com</a>
                    </address>
                    
                </nav>
            </div>
        </div>
    )
}