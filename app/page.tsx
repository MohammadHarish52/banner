"use client";
import BannerImageComp from "@/components/BannerImageComp";
import EditBannerTemplate from "@/components/EditBannerTemplate"; // Import the modal component
import adData from "@/constants/ad";
import { useState } from "react";

interface Adbanner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

export default function Home() {
  const [banners, setBanners] = useState<Adbanner[]>(adData);
  const [editBanner, setEditBanner] = useState<Adbanner | null>(null);

  const handleEdit = (banner: Adbanner) => {
    setEditBanner(banner);
  };

  const handleSave = (
    id: number,
    newTitle: string,
    newDescription: string,
    newCta: string,
    newImage: string,
    newBackground: string
  ) => {
    const updatedBanners = banners.map((banner) =>
      banner.id === id
        ? {
            ...banner,
            title: newTitle,
            description: newDescription,
            cta: newCta,
            image: newImage,
            background: newBackground,
          }
        : banner
    );
    setBanners(updatedBanners);
    setEditBanner(null);
  };

  return (
    <div className="mx-auto p-4 grid-cols-1 d:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-900">
      <h1 className=" text-2xl md:text-4xl mb-4 text-white font-bold text-center">
        BANNER ASSIGMENT
      </h1>
      <div className="flex flex-wrap ">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full md:w-1/2 xl:w-1/3  px-0 md:px-4 mb-8  "
          >
            <BannerImageComp
              title={banner.title}
              description={banner.description}
              cta={banner.cta}
              image={banner.image}
              background={banner.background}
              onEdit={() => handleEdit(banner)}
            />
          </div>
        ))}
      </div>
      {editBanner && (
        <EditBannerTemplate
          title={editBanner.title}
          description={editBanner.description}
          cta={editBanner.cta}
          image={editBanner.image}
          background={editBanner.background}
          onSave={(title, description, cta, image, background) =>
            handleSave(
              editBanner.id,
              title,
              description,
              cta,
              image,
              background
            )
          }
          onClose={() => setEditBanner(null)}
        />
      )}
    </div>
  );
}
