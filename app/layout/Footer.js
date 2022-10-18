import { FiPhoneCall } from "react-icons/fi";
import FooterCard from "./FooterCard";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container">
        {/* {footer info } */}
        <div className="flex justify-between items-center border-b flex-wrap justify-between space-y-2 py-9">
          <FooterCard
            title={"Free Shopping"}
            subtitile={"For all orders over $200"}
            image={"icons/flight.png"}
          />
          <FooterCard
            title={"Free Shopping"}
            subtitile={"For all orders over $200"}
            image={"icons/flight.png"}
          />
          <FooterCard
            title={"Free Shopping"}
            subtitile={"For all orders over $200"}
            image={"icons/flight.png"}
          />
          <FooterCard
            title={"Free Shopping"}
            subtitile={"For all orders over $200"}
            image={"icons/flight.png"}
          />
          <FooterCard
            title={"Free Shopping"}
            subtitile={"For all orders over $200"}
            image={"icons/flight.png"}
          />
        </div>
        {/* {footer widgets} */}
        <div className="my-10">
          <div className="container">
            <div className="max-w-md ">
              <h2 className="text-xl font-bold mb-5">
                Farmart – Your Online Foods & Grocery
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus viverra iaculis. Etiam vulputate et justo eget
                scelerisque.
              </p>
              <div className="mt-5 space-y-2">
                <span className="flex ">
                  <FiPhoneCall className="text-color mt-[5px]" />
                 <div className="ml-5">
                 <p className="">HOtline 24/7</p>
                  <h3 className="text-2xl font-bold">(+965) 7492-4277</h3>
                 </div>
                </span>

                <span className="flex !mt-5">
                  <FiPhoneCall className="text-color mt-[5px]" />
                 <div className="ml-5">
                 <address className="">959 Homestead Street Eastlake, NYC</address>
               
                 </div>
                </span>

                <span className="flex ">
                  <FiPhoneCall className="text-color mt-[5px]" />
                 <div className="ml-5">
                 <p className="">support@farmart.com</p>
                 
                 </div>
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
