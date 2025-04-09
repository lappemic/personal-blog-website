import Image from 'next/image'

const clients = [
  { name: 'Protontypes', logo: '/logos/protontypes-logo.png', width: 200 },
  { name: 'Batterylog', logo: '/logos/batterylog-logo.png', width: 160 },
  { name: 'Kischulgenie', logo: '/logos/kischulgenie-logo.png', width: 160 },
  { name: 'Shop.com', logo: '/logos/shopcom-logo.jpg', width: 180 },
  { name: 'Shizen', logo: '/logos/shizen-logo.png', width: 140 },
  { name: 'Kidz', logo: '/logos/kidz-logo.jpeg', width: 120 },
]

export default function ClientLogos() {
  return (
    <div className="my-8 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3">
      {clients.map((client) => (
        <div key={client.name} className="flex h-24 w-full items-center justify-center px-4">
          <Image
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={60}
            className="max-h-[60px] w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
          />
        </div>
      ))}
    </div>
  )
}
