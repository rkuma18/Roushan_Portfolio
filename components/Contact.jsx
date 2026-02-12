import {useState, useEffect} from "react";
// form spree
import {useForm, ValidationError} from "@formspree/react"
import AnimatedText from "./AnimatedText";
import {FaCheckCircle} from "react-icons/fa";

const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
    // state for form inputs
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });
    
    // state to control icon visibility and button text
    const [showIcon, setShowIcon] = useState(false); // Fixed: was useEffect(false)
    
    // handle input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    
    // clear the form after submission and handle message visibility
    useEffect(() => {
        if (state.succeeded) {
            setShowIcon(true); // show the success icon
            // clear form inputs
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: "",
            });
            // hide the icon and revert button text after 3 seconds
            const timer = setTimeout(() => {
                setShowIcon(false);
            }, 3000);
            // clean up the timer on component unmount or before re-running effect
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);
    
    // handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevent default form submission
        handleSubmit(formData); // call formspree's submit handler with formData
    };
    
    return (
        <section className="pt-8 xl:pt-12 pb-32" id="contact">
            <div className="w-full px-4 xl:px-32">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-[600px] mx-auto flex flex-col">
                        <AnimatedText text="Let's Connect" textStyles="h2 mb-12 text-center"/>
                        {/* form */}
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full">
                            {/* firstname & lastname fields */}
                            <div className="flex gap-8">
                                {/* First name */}
                                <div className="flex-1">
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-primary">
                                        First Name <span className="text-accent">*</span>
                                    </label>
                                    <input onChange={handleChange} type="text" id="firstname" name="firstname" value={formData.firstname} className="input" placeholder="First Name" required/>
                                </div>
                                {/* Last Name */}
                                <div className="flex-1">
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                                        Last Name <span className="text-accent">*</span>
                                    </label>
                                    <input onChange={handleChange} type="text" id="lastname" name="lastname" value={formData.lastname} className="input" placeholder="Last Name" required/>
                                </div>
                            </div>
                            {/* email fields */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                                    Email <span className="text-accent">*</span>
                                </label>
                                <input onChange={handleChange} type="email" id="email" name="email" value={formData.email} className="input" placeholder="youremail@email.com" required/>
                                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            </div>
                            {/* Phone fields */}
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                                    Phone <span className="text-accent">*</span>
                                </label>
                                <input onChange={handleChange} type="tel" id="phone" name="phone" value={formData.phone} className="input" placeholder="+91-0000000000"/>
                            </div>
                            {/* message fields */}
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea onChange={handleChange} id="message" name="message" value={formData.message} className="textarea" placeholder="Leave me a message..." rows="5" required/>
                                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                            </div>
                            {/* submit button */}
                            <button type="submit" disabled={state.submitting} className="btn btn-accent flex items-center justify-center gap-2">
                                {
                                    state.submitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            {/* show icon with opacity transition */}
                                            <FaCheckCircle className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"}`}/>
                                            {/*button text */}
                                            <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>Send message</span>
                                        </>
                                    )
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;