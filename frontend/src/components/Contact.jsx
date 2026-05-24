import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {

  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);
      setStatus("");

      await axios.post("http://localhost:5000/api/contact", form);

      setStatus("Message sent successfully");
      setForm({
        name:"",
        email:"",
        message:""
      });
    } catch (error) {
      setStatus(error.response?.data?.error || "Message failed to send");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker terminal-line mb-3">Open channel</p>
          <h2 className="section-title mb-6">Contact Me</h2>
          <p className="max-w-md text-lg leading-8 text-[#d8e2e7]">
            Send a message from the bridge. Share a project idea, internship
            opportunity, collaboration, or quick hello.
          </p>

          <div className="glass-panel hud-corners mt-8 rounded-lg p-5">
            <div className="flex items-center gap-3 text-[#5eead4]">
              <FaEnvelope />
              <span className="font-bold">Response orbit</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#d8e2e7]">
              I usually reply quickly when the signal is clear and the mission
              sounds interesting.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel hud-corners flex flex-col gap-5 rounded-lg p-6 md:p-8"
        >

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#fff7ed]">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border border-[#ff8a65]/15 bg-[#080609]/72 p-4 text-[#fff7ed] outline-none transition placeholder:text-[#7f8790] focus:border-[#ff8a65]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#fff7ed]">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="rounded-lg border border-[#ff8a65]/15 bg-[#080609]/72 p-4 text-[#fff7ed] outline-none transition placeholder:text-[#7f8790] focus:border-[#ff8a65]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#fff7ed]">Message</span>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="min-h-36 resize-y rounded-lg border border-[#ff8a65]/15 bg-[#080609]/72 p-4 text-[#fff7ed] outline-none transition placeholder:text-[#7f8790] focus:border-[#ff8a65]"
            ></textarea>
          </label>

          <button
            disabled={isSending}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#ff8a65] px-6 py-4 font-black text-[#160b0a] transition hover:bg-[#ffb86b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send"} <FaPaperPlane />
          </button>

          {status && (
            <p className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
              status.toLowerCase().includes("success")
                ? "border-[#5eead4]/30 bg-[#5eead4]/10 text-[#ccfbf1]"
                : "border-rose-300/30 bg-rose-300/10 text-rose-100"
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
