import Link from "next/link"
import Image from "next/image"
import ps from '@/assets/ps5-slim-goedkope-playstation_large 1.png'
import woman from '@/assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import amasecho from '@/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import parfume from '@/assets/652e82cd70aa6522dd785109a455904c.png'

export default function NewArrivalSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
     <div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-2 bg-red-500"></div>
          <span className="text-red-500 font-medium">Featured</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">New Arrival</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PlayStation 5 Card */}
        <div className="relative bg-black text-white rounded-md overflow-hidden">
          <Image
            src={ps}
            alt="PlayStation 5"
            width={600}
            height={500}
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold mb-1">PlayStation 5</h3>
            <p className="text-sm mb-4">Black and White version of the PS5 coming out on sale.</p>
            <Link
              href="#"
              className="inline-block bg-transparent border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          {/* Women's Collections Card */}
          <div className="relative bg-black text-white rounded-md overflow-hidden">
            <Image
              src={woman}
              alt="Women's Collections"
              width={600}
              height={250}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold mb-1">Women`s Collections</h3>
              <p className="text-sm mb-4">Featured woman collections that give you another vibe.</p>
              <Link
                href="#"
                className="inline-block bg-transparent border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Speakers Card */}
            <div className="relative bg-black text-white rounded-md overflow-hidden">
              <Image
                src={amasecho}
                alt="Speakers"
                width={300}
                height={200}
                className="w-[85%] m-auto h-[280px] object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold mb-1">Speakers</h3>
                <p className="text-xs mb-3">Amazon wireless speakers</p>
                <Link
                  href="#"
                  className="inline-block bg-transparent border border-white text-white px-3 py-1 text-xs hover:bg-white hover:text-black transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Perfume Card */}
            <div className="relative bg-black text-white rounded-md overflow-hidden">
              <Image
                src={parfume}
                alt="Perfume"
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold mb-1">Perfume</h3>
                <p className="text-xs mb-3">GUCCI INTENSE OUD EDP</p>
                <Link
                  href="#"
                  className="inline-block bg-transparent border border-white text-white px-3 py-1 text-xs hover:bg-white hover:text-black transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}