interface SearchVectorButtonProps {
  keyword: string;
  onClick: () => void;
}

const SearchVectorButton = ({ keyword, onClick }: SearchVectorButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border border-[#12B13E] bg-white px-3 py-1 text-xs"
      }
    >
      {keyword}
    </button>
  );
};

export default SearchVectorButton;
