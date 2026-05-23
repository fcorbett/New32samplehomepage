import {
  fax,
  location,
  officeHours,
  phone,
} from "../../content/siteFacts";

export function OfficeHours() {
  return (
    <section
      className="w-full px-6 md:px-16 py-16 md:py-20 bg-white"
      aria-labelledby="hours-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="hours-heading"
          className="font-semibold text-[#94a062] text-lg md:text-xl mb-2"
        >
          hours & location
        </h2>
        <p className="text-[#7e6b4d] text-sm md:text-base mb-8 leading-relaxed">
          {location.parkingNote}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <table className="w-full text-sm md:text-base text-[#1a1a18]">
              <caption className="sr-only">Office hours</caption>
              <tbody>
                {officeHours.map(({ day, hours }) => (
                  <tr key={day} className="border-b border-[#e8e8e4] last:border-0">
                    <th
                      scope="row"
                      className="py-3 pr-6 text-left font-medium text-[#7e6b4d] w-32"
                    >
                      {day}
                    </th>
                    <td className="py-3 font-normal">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex flex-col gap-3 text-sm md:text-base">
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a18] underline hover:opacity-70 transition-opacity"
              >
                {location.address}
              </a>
              <p className="text-[#7e6b4d]">
                <span className="font-medium text-[#1a1a18]">Phone:</span>{" "}
                <a
                  href={phone.tel}
                  className="underline hover:opacity-70 transition-opacity"
                >
                  {phone.display}
                </a>
              </p>
              <p className="text-[#7e6b4d]">
                <span className="font-medium text-[#1a1a18]">Fax:</span> {fax}
              </p>
            </div>

            <a
              href={phone.tel}
              className="inline-block mt-8 px-6 py-3 bg-[#94a062] text-white text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Call to schedule
            </a>
          </div>

          <div className="relative min-h-[220px] md:min-h-[280px] bg-[#f7f7f4] border border-[#e8e8e4] overflow-hidden rounded-sm">
            <iframe
              title="Map to new32 Cosmetic and Family Dentistry"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.847!2d-122.3012!3d47.6654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490145d0e2e8f0b%3A0x0!2s4915%2025th%20Ave%20NE%20%23107%2C%20Seattle%2C%20WA%2098105!5e0!3m2!1sen!2sus!4v1"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
