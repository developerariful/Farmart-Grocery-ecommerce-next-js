import { FiPhoneCall } from "react-icons/fi";
import FooterCard from "../components/FooterCard";
import Link from "next/link";
import Button from "../components/share/Button";

function Footer() {

  return (
    <div className="bg-white">
      <div className="container">
        {/* {footer info } */}
        <div className="flex justify-between items-center border-b flex-wrap  space-y-2 py-9">
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
        <div className="my-10 flex flex-wrap gap-10 justify-evenly">
        
           
              <div className="max-w-sm ">
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

            {/* Links */}
              <div className="">
                <h2 className="mb-6 font-bold text-lg">Useful Links</h2>
                <ul className="space-y-4">
                  <FooterLInk
                  href="/"
                  text="About Us"
                  />
                  <FooterLInk
                  href="/"
                  text="Contact"
                  />
                  <FooterLInk
                  href="/"
                  text="Help Center"
                  />
                  <FooterLInk
                  href="/"
                  text="Career"
                  />
                  <FooterLInk
                  href="/"
                  text="Sitemap"
                  />
                  
                </ul>
              </div>
          
       
            {/* Help Center */}
              <div className="">
                <h2 className="mb-6 font-bold text-lg">Help center</h2>
                <ul className="space-y-4">
                  <FooterLInk
                  href="/"
                  text="Payments"
                  />
                  <FooterLInk
                  href="/"
                  text="Shipping"
                  />
                  <FooterLInk
                  href="/"
                  text="Product Returns"
                  />
                  <FooterLInk
                  href="/"
                  text="FAQ"
                  />
                  <FooterLInk
                  href="/"
                  text="Checkout"
                  />
                  <FooterLInk
                  href="/"
                  text="Other Issues"
                  />
                  
                </ul>
              </div>
            {/* Farmart Busines */}
              <div className="max-w-sm">
              <h2 className="text-xl font-bold mb-5">Farmart Newsletter</h2>
                <p>
                Register now to get updates on promotions and coupns. Don’t worry! We not spam.
                </p>
                 <div className="flex items-center">
                  <div className="flex items-center flex-1 border p-4 rounded">
                  <FiPhoneCall className="text-color mt-[5px]" />
                  <input
                type="text"
                placeholder="I'm searching for..."
                className="outline-none bg-transparent border-l border-gray-400 px-4 flex-1"
            />
                  </div>
                  <Button 
                  title='subscribe'
                  className="self-stretch "
                  />
                 </div>
              </div>
          
       
        </div>
      </div>
    </div>
  );
}

const FooterLInk =({href = '#', text })=>(
  <li>
                    <Link href={href}>
                      <a href={href}>{text}</a>
                    </Link>
                  </li>
)
export default Footer;
