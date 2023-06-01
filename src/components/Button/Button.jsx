const Button = ({name, disabled, clik}) => {


  return (
      <button className='buttons__btn' onClick={clik} disabled={disabled}>
        {name}
      </button>
  );
};

export default Button;
