type Props = {
  text: string;
  active?: boolean;
  onClick: () => void;
}

function Button({ text, active = false, onClick }: Props) {
  const activeClass = active
    ? 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
    : 'bg-white text-gray-900 hover:text-blue-700 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100';

  return (
    <button
      type="button"
      className={`py-2 px-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 ${activeClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
