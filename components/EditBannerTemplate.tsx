import { useState } from "react";
import { BiEdit, BiUpload } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

// Example image URLs
const predefinedImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/banner5.jpg",
];

interface EditBannerTemplateProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onSave: (
    title: string,
    description: string,
    cta: string,
    image: string,
    background: string
  ) => void;
  onClose: () => void;
}

const EditBannerTemplate: React.FC<EditBannerTemplateProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onSave,
  onClose,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);
  const [newBackground, setNewBackground] = useState(background);

  const handleSave = () => {
    onSave(newTitle, newDescription, newCta, newImage, newBackground);
    onClose();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-full overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Edit Banner</h3>

        {/* Display the actual banner being edited */}
        <div
          className="relative p-4 m-3 text-white bg-cover bg-center shadow-lg h-auto md:h-80 flex justify-between items-center"
          style={{
            backgroundImage: `url(${newBackground})`,
          }}
        >
          <button className="absolute top-3 right-3 text-black bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <MdEdit />
          </button>
          <div className="ml-4 md:ml-6 flex-1 min-w-0">
            <h2 className="text-lg md:text-3xl font-bold mb-3 text-white bg-black bg-opacity-50 px-3 py-1">
              {newTitle}
            </h2>
            <p className="text-xs md:text-lg text-white bg-black bg-opacity-75 py-1 px-3 mb-3">
              {newDescription}
            </p>
            <button className="bg-black text-xs md:text-base text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition">
              {newCta}
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={image}
              alt=""
              className="w-24 h-48   object-cover border-2 border-gray-300 shadow-lg "
            />
          </div>
        </div>

        {/* Form for editing banner */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Button Text
        </label>
        <input
          type="text"
          value={newCta}
          onChange={(e) => setNewCta(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Image selection section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Image
          </label>
          <div className="flex space-x-2">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
              <input
                type="file"
                className="absolute opacity-0 cursor-pointer w-16 h-16"
                onChange={handleImageChange}
              />
              <span className="text-sm">
                <BiUpload className="text-2xl" />
              </span>
            </div>
            {predefinedImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`image${idx}`}
                className="w-16 h-16 rounded-full object-cover cursor-pointer"
                onClick={() => setNewImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplate;
