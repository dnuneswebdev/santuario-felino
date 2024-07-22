function StatusTag({status, children}) {
  return (
    <>
      <p
        className={`${status} text-white p-1 rounded-md font-semibold lg:w-3/4 mx-auto`}
      >
        {children}
      </p>
    </>
  );
}

export default StatusTag;
