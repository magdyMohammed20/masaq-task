import Image from "next/image";
import React from "react";

const GroupImages = () => {
  const persons = [
    "/assets/images/person4.jpeg",
    "/assets/images/person3.jpeg",
    "/assets/images/person2.jpeg",
    "/assets/images/person1.png"
  ];

  return (
    <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          {persons.map((i, index) => (
            <div
              key={index}
              className="border-cloud h-8 w-8 overflow-hidden rounded-full border"
              style={{ transform: `translateX(-${index * 5}px)` }} // Adjust the value (e.g., 12px) as needed
            >
              <Image
                src={i}
                alt={`image-${index}`}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-2 text-[14px] font-bold text-graycustom">1,200+ reviews (4.9 of 5)</p>
      </div>
    </div>
  );
};

export default GroupImages;
