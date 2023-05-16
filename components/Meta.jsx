import Head from 'next/head'

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* Favicon: Calendar Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Booking Calendar',
  keywords:
    'Online booking calendar, Booking system,Reservation calendar,Schedule appointments,Online scheduling,Booking software,Availability calendar,Event booking system,Room reservation,Meeting scheduler,Appointment scheduling,Reservation management,Calendar booking,Booking tool,Online reservations,Conference room booking,Bookable calendar,Meeting room scheduling,Resource scheduling,Booking planner',
  description:
    'A booking calendar is a tool used for scheduling appointments, reservations, and events. It allows users to easily view available dates and times, select a desired slot, and reserve it.',
}
