import { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

// Example image URLs
const predefinedImages = [
  "https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1511823794984-b87716139b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1533567767427-38bb7cbc0409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHl0aG9ufGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1613779814142-d88c07f61aaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1597164507717-c46f576fe1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9sYXIlMjBiZWFyfGVufDB8MXwwfHx8MA%3D%3D",
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
          className="relative p-4 m-3 text-white bg-cover bg-center shadow-lg h-auto md:h-80 flex justify-between items-center rounded-lg"
          style={{
            backgroundImage: `url(${newBackground})`,
          }}
        >
          <button className="absolute top-3 right-3 text-black bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <MdEdit />
          </button>
          <div className="ml-4 md:ml-6 flex-1 min-w-0">
            <h2 className="text-lg md:text-3xl font-bold mb-3 text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
              {newTitle}
            </h2>
            <p className="text-xs md:text-lg text-white bg-black bg-opacity-75 py-1 px-3 mb-3 rounded-lg">
              {newDescription}
            </p>
            <button className="bg-white text-xs md:text-base text-black font-semibold px-4 py-2 rounded hover:bg-gray-700 transition">
              {newCta}
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={newImage}
              alt=""
              className="w-24 h-48 object-cover border-2 border-gray-300 shadow-lg"
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
        <div className="mb-4 overflow-x-auto">
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

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Image URL
        </label>
        <input
          type="text"
          value={newBackground}
          onChange={(e) => setNewBackground(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplate;
