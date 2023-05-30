import React, { useState } from 'react';

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
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit clicked');
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formData),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
        if (result.status === 'Message Sent') {
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }
    }

    return (
        <div className="h-100" style={styles.background}>
            <h2 className="p-5" style={styles.text}>Contact Me</h2>
            <div className="d-lg-flex px-3">
                <div className="card col-lg-6 m-auto form-container" style={styles.form}>
                    <form className="form-group p-3 contact-form" novalidate autoComplete='on' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input className="form-control" style={styles.input} type="text" id="name" placeholder="Full name" />
                            <div className="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>
                        <div className="mb-3">
                            <input className="form-control" style={styles.input} type="email" id="email" placeholder="Email address" required />
                            <div className="invalid-feedback">
                                Please provide your email.
                            </div>
                        </div>
                        <div className="mb-3">
                            <input className="form-control" style={styles.input} type="text" id="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">                                              <textarea className="form-control" style={styles.input} id="message" placeholder="Message" required rows="3"></textarea>
                            <div className="invalid-feedback">
                                Please provide a message.
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn" style={styles.button}>{status}</button>
                        </div>
                    </form>
                </div>
                <nav className="col-lg-3 m-auto">
                    <address className=" m-3">
                        <a href="tel:6479812121" className="text-decoration-none" style={styles.text}>+1 (647) 981-2121</a>
                    </address>
                    <address className=" m-3" style={styles.text}>
                        655 Vanessa Crescent <br />
                        Mississauga, ON L5H
                        2N5 <br /> Canada
                    </address>
                    <address className=" m-3">
                        <a href="mailto:madeline.lowes@gmail.com" className="text-decoration-none" style={styles.text}>madeline.e.lowes@gmail.com</a>
                    </address>

                </nav>
            </div>
        </div>
    )
}
