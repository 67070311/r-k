import Image from "next/image";

const images = [
  {
    src: "/home/6/1.png",
    alt: "ช่างถือเครื่องมือ",
    className: "row-span-2",
  },
  {
    src: "/home/6/2.png",
    alt: "ช่างพูดคุยกับลูกค้า",
    className: "",
  },
  {
    src: "/home/6/3.png",
    alt: "ช่างซ่อมรถ",
    className: "",
  },
  {
    src: "/home/6/4.png",
    alt: "ช่างให้คำปรึกษาลูกค้า",
    className: "",
  },
  {
    src: "/home/6/5.png",
    alt: "ช่างตรวจเช็ครถด้วยแท็บเล็ต",
    className: "",
  },
];

export default function HomeGallerySection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-20 lg:py-16">
      <div className="mx-auto grid max-w-[1080px] grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {images.map((image) => (
          <div
            key={image.src}
            className={`relative overflow-hidden bg-gray-100 ${image.className}`}
          >
            <div
              className={`relative ${
                image.className === "row-span-2"
                  ? "h-[230px] sm:h-[360px] lg:h-[430px]"
                  : "h-[110px] sm:h-[172px] lg:h-[205px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
