export function Card({ img, name, price }) {
  return (
    <div className="max-w-50 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center">
      <a href="#">
        <img
          className="rounded-t-lg w-50 h-48 object-cover"
          src={img}
          alt={name}
        />
      </a>
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-800 dark:text-white">{name}</p>
        <p className="text-xs text-gray-600 dark:text-gray-300">{price}</p>
      </div>
    </div>
  );
}
