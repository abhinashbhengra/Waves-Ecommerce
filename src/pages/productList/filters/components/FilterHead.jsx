export const FilterHead = ({ filterDispatch }) => {
  const handleClearFilter = () => {
    filterDispatch({ type: "RESET" });
  };
  return (
    <>
      <p>Filter</p>
      <button onClick={handleClearFilter}>Clear</button>
    </>
  );
};
