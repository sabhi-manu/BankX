type ButtonProps = {
  text: string;
  type:'button'|'submit'|'reset';
  isPending:boolean
};

const Button = ({ text, type,isPending }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1.5 w-full rounded-lg cursor-pointer hover:bg-blue-600 outline-none "
      type={type}
    >
     
      {isPending?"pending...":text}
    </button>
  );
};

export default Button;
