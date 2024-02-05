interface SearchVectorButtonProps {
  keyword: string;
}

const SearchVectorButton = ({ keyword }: SearchVectorButtonProps) => {
  return (
    <button
      className={
        "rounded-full border border-[#12B13E] bg-white px-3 py-1 text-xs"
      }
    >
      {keyword}
    </button>
  );
};

export default SearchVectorButton;
