import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-darkBlue py-10 lg:py-12">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        {/* Left Side: Logo & Socials, Links */}
        <div className="flex flex-col lg:flex-row w-full lg:w-auto h-full space-y-8 lg:space-y-0 lg:space-x-24 text-center lg:text-left">
          
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center lg:items-start justify-between h-full space-y-8">
            <Image src="/images/logo-light.svg" alt="Digitalbank" width={139} height={20} />
            <div className="flex space-x-4">
              {['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'].map((social) => (
                <a key={social} href="#" aria-label={`Visit our ${social}`} className="group">
                  <div className="relative w-6 h-6">
                    <Image 
                      src={`/images/icon-${social}.svg`} 
                      alt={`${social} icon`} 
                      fill 
                      className="object-contain group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-90 group-hover:saturate-200 transition-all duration-300" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24">
            {/* Column 1 */}
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">Blog</a></li>
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-neutral-lightGrayishBlue hover:text-primary-limeGreen transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </nav>

        </div>

        {/* Right Side: Button & Copyright */}
        <div className="flex flex-col items-center lg:items-end justify-between h-full space-y-8 mt-8 lg:mt-0">
          <button className="btn-primary">Request Invite</button>
          <p className="text-neutral-grayishBlue text-xs lg:text-sm">
            © Digitalbank. All Rights Reserved
          </p>
        </div>

      </div>
      
      {/* Mentor attribution */}
      <div className="attribution text-center text-[clamp(0.875rem,1.6vw,1rem)] text-neutral-grayishBlue mt-8">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-white hover:text-primary-limeGreen" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#" className="text-white hover:text-primary-limeGreen">Akinwumi Akinfemi</a>.
      </div>
    </footer>
  );
}
