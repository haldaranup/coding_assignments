

interface ButtonProps {
    label: string;
    handleClick: () => void;
}

const Button = (props: ButtonProps) => {
    const {label, handleClick} = props;
  return (
    <div className="btn">
        <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button