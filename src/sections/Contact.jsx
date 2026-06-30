import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setStatusMessage("");
    setStatusType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      setStatusMessage("Thanks for reaching out. I’ll get back to you soon.");
      setStatusType("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage(
        "Something went wrong. Please email me directly instead.",
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 text-body">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-disabled={loading}
                  className={loading ? "cursor-not-allowed opacity-70" : ""}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/send.png" alt="send-icon" />
                    </div>
                  </div>
                </button>

                {statusMessage && (
                  <p
                    role={statusType === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`text-sm ${
                      statusType === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full">
              <div className="xl:col-span-7 min-h-96 flex items-center">
                <div className="w-full h-full flex flex-col justify-center gap-6 px-5 md:px-10">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Let’s build something awesome together
                  </h2>

                  <p className="text-white-50 text-body leading-relaxed">
                    Whether you're looking for a developer, have a project in
                    mind, or simply want to connect and discuss technology, I'd
                    love to hear from you. I'm always open to exciting
                    opportunities, meaningful collaborations, and engaging
                    conversations.
                  </p>

                  <div className="mt-4 flex flex-col gap-3 text-white-50 text-body">
                    <p>
                      <span className="text-white font-medium">Email:</span>{" "}
                      <a
                        href="mailto:jenny.chenchou@gmail.com"
                        className="underline hover:text-white transition-colors"
                      >
                        jenny.chenchou@gmail.com
                      </a>
                    </p>

                    <p>
                      <span className="text-white font-medium">
                        On the Internet:
                      </span>{" "}
                      <a
                        href="https://www.linkedin.com/in/jenny-chen-chou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>{" "}
                      /{" "}
                      <a
                        href="https://github.com/JenC2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
