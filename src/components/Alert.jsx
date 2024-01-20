const Alert = ({ error }) => {
  return (
    <>
      {error.error && (
        <div className={`alert alert-${error.color}`} role='alert'>
          {error.msg}
        </div>
      )}
    </>
  );
};

export default Alert;