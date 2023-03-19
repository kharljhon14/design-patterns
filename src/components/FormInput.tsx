interface Props {
  labelName?: string;
  inputName: string;
  type: string;
  id: string;
  placeholder?: string;
  width?: string;
  classes?: string[];
}

const FormInput = ({
  labelName,
  inputName,
  type,
  id,
  classes,
  placeholder,
  width,
}: Props) => {
  return (
    <div className={width}>
      {labelName ? <label htmlFor={id}>{labelName}</label> : null}
      <input
        placeholder={placeholder}
        className={`border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500 ${classes?.join(
          ' ',
        )}`}
        type={type}
        id={id}
        name={inputName}
      ></input>
    </div>
  );
};

export default FormInput;
