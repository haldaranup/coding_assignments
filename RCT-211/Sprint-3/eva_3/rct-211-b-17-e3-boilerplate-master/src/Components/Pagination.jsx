export const Pagination = ({ total, selected, onPageChange }) => {
  const arr = new Array(total).fill(0);

  return <div className="pageContainer">
    {arr.map((item, page) => (
        <button
          onClick={() => {
            onPageChange(page + 1)
            
          } }
          disabled={(page = 1) === selected}
        >{page}</button>
      ))}
  </div>;
};
