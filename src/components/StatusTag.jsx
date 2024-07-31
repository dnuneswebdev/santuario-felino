function StatusTag({status, children}) {
  return (
    <>
      <p
        className={`${status} text-black p-1 rounded-md font-semibold mx-auto text-center`}
      >
        {children}
      </p>
    </>
  );
}

export default StatusTag;
