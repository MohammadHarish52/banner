import { MdEdit } from "react-icons/md";

interface BannerImageProps {
  title: string;
  description: string;
  image: string;
  cta: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp = ({
  title,
  description,
  image,
  cta,
  background,
  onEdit,
}: BannerImageProps) => {
  return (
    <div
      className=" relative p-4  m-3 text-white bg-cover bg-center shadow-lg h-auto md:h-80 flex justify-between gap-4 items-center rounded-lg "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <button className="absolute top-3 right-3 text-black  bg-white p-2 rounded-full shadow hover:bg-gray-100">
        <MdEdit onClick={onEdit} />
      </button>
      <div className="ml-4 md:ml-6 flex-1 min-w-0">
        <h2 className="text-lg md:text-3xl font-bold mb-3 text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
          {title}
        </h2>
        <p className="text-xs md:text-lg text-white bg-black bg-opacity-50 py-1 px-3 mb-3 rounded-lg">
          {description}
        </p>
        <button className="bg-white text-xs md:text-base text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
          {cta}
        </button>
      </div>

      <div className="flex-shrink-0">
        <img
          src={image}
          alt=""
          className="w-24 h-48   object-cover border-2 border-gray-300 shadow-lg rounded-lg "
        />
      </div>
    </div>
  );
};

export default BannerImageComp;
