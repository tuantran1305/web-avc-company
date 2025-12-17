import Link from "next/link";

export function AwwaResources() {
  return (
    <section className="bg-sky-50 border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">AWWA Headquarters</h3>
            <p className="text-sm leading-6">
              6666 W. Quincy Ave., Denver, CO 80235 USA
              <br /> 303.794.7711 • 800.926.7337
            </p>
            <h3 className="font-semibold mt-6 mb-3">Government Affairs Office</h3>
            <p className="text-sm leading-6">
              1300 Eye St. NW Suite 701, Washington, DC 20005 USA
              <br /> 202.628.8303
            </p>
            <h3 className="font-semibold mt-6 mb-1">AWWAIndia Association</h3>
            <p className="text-sm leading-6">New Delhi, India</p>
            <p className="text-sm">
              <Link href="https://www.awwaindia.org" target="_blank" className="underline">
                www.awwaindia.org
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.awwa.org/About-Us" target="_blank" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/News-Alerts" target="_blank" className="hover:underline">Press Room</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Work-for-AWWA" target="_blank" className="hover:underline">Work For AWWA</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Store" target="_blank" className="hover:underline">Store</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.awwa.org/Resources-Tools" target="_blank" className="hover:underline">Resource Topics</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Publications" target="_blank" className="hover:underline">Journals &amp; Magazines</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Standards" target="_blank" className="hover:underline">Standards</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Standards-Index/Manuals" target="_blank" className="hover:underline">Manuals</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Events-Education/Events-Calendar" target="_blank" className="hover:underline">Event Calendar</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Membership-Volunteering/Scholarships" target="_blank" className="hover:underline">Scholarships</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.awwa.org/Membership-Volunteering/Join" target="_blank" className="hover:underline">Join AWWA</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Membership-Volunteering/Renew" target="_blank" className="hover:underline">Renew</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Membership-Volunteering/Volunteer" target="_blank" className="hover:underline">Volunteer</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Water-Equation" target="_blank" className="hover:underline">Water Equation</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Advertise" target="_blank" className="hover:underline">Advertise</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Career-Center" target="_blank" className="hover:underline">Career Center</Link>
              </li>
              <li>
                <Link href="https://www.awwa.org/Sourcebook" target="_blank" className="hover:underline">Sourcebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
