import {
  FaXTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Contacts() {
  return (
    <div>
      {" "}
      <section className="bg-slate-50 text-slate-700 grid gap-5">
        <div className="container mx-auto py-16 md:px-20 px-5">
          <div className="grid gap-3">
            <h1 className="text-3xl font-bold">Contact</h1>
            <h1 className="text-lg">
              Dont let valuable data slip through your fingers- work with a
              skilled data analyst to turn your numbers into insights. Ready to
              take your business to the next level? Contact me today and lets
              harness the power of your data.
            </h1>
          </div>
          <div className="grid xl:grid-cols-3 gap-9 py-9">
            <div className="grid xl:col-span-2">
              <form className="flex flex-col gap-9">
                <div className="grid xl:flex justify-between gap-9">
                  <div className="grid gap-2 w-full">
                    <label className="font-bold text-lg">Name</label>
                    <input className="bg-gray-100 p-3 w-full outline-none" />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label className="font-bold text-lg">Email</label>
                    <input className="bg-gray-100 p-3 w-full outline-none" />
                  </div>
                </div>
                <div className="grid gap-2 w-full">
                  <label className="font-bold text-lg">Message</label>
                  <textarea className="bg-gray-100 p-3 h-56 w-full outline-none" />
                </div>
              </form>
            </div>
            <div className="grid xl:col-span-1">
              <div className="grid gap-2 w-full">
                <label className="font-bold text-lg">Address</label>
                <span className="text-lg">Lagos</span>
                <span className="text-lg">NIGERIA</span>
              </div>
              <div className="grid gap-2 w-full">
                <label className="font-bold text-lg">Email</label>
                <a href="mailto:purepen1376@gmail.com" className="text-lg">
                  purepen1376@gmail.com
                </a>
              </div>
              <div className="grid gap-2 w-full">
                <label className="font-bold text-lg">Phone</label>
                <a href="tel:+2347031643120" className="text-lg">
                  +2347031643120
                </a> 
                <a href="tel:+2349041592542" className="text-lg">
                  +2349041592542
                </a>
              </div>
              <div className="grid gap-2 w-full">
                <label className="font-bold text-lg">Social</label>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/purepen1376"
                    target="blank"
                    className="text-lg"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://facebook.com/olaniiyi.michealmcolas"
                    target="blank"
                    className="text-lg"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://github.com/purepen"
                    target="blank"
                    className="text-lg"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://instagram.com/purepen1376"
                    target="blank"
                    className="text-lg"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com/in/micheal-olaniyi"
                    target="blank"
                    className="text-lg"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts
