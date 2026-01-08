import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react";
import { fetchBooks, type IBook as IApiBook } from "../Services/apiBooks";

// Interface for UI (mapped from API)
interface IUiBook {
  id: string; // Changed from number to string to match _id
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  image: string;
  author: string; // Added author field
}

const Products = () => {
  const [selectedBook, setSelectedBook] = useState<IUiBook | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-600">
          Loading books...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-red-600">
          Error loading books: {error.message}
        </div>
      </div>
    );
  }

  // Map API data to UI structure
  const books: IUiBook[] = (data?.data || []).map((book: IApiBook) => ({
    id: book._id,
    title: book.title,
    shortDesc: book.description, // API only has one description
    fullDesc: book.description,
    price: `${book.price} EGP`, // Format number to string with currency
    image: book.image,
    author: "Doctor Nelly", // Hardcoded author as it's not in API response based on user example
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600">
            Discover transformative wisdom for your wellness journey
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
            >
              {/* Book Image */}
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback for broken images if needed
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x600?text=No+Image";
                  }}
                />
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {book.shortDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-purple-600">
                    {book.price}
                  </span>
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 hover:rotate-90 z-10"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Book Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="rounded-2xl shadow-xl max-h-96 object-cover"
                  />
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {selectedBook.title}
                  </h2>

                  <div className="mb-4">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
                      Author
                    </p>
                    <p className="text-xl font-semibold text-purple-600">
                      {selectedBook.author}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                      Description
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedBook.fullDesc}
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                      Price
                    </p>
                    <p className="text-5xl font-bold text-purple-600 mb-6">
                      {selectedBook.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
