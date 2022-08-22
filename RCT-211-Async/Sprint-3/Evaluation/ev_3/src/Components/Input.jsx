//Complete the custom Input component based on the props that it expects to receive

export const Input = ({
  type = "text",
  size = "md",
  variant,
  value,
  onChange,
}) => {
  let mapSize = { height: "40px", width: "80px" };

  if (size === "sm") {
    mapSize.height = "15px";
    mapSize.width = "100px";
  } else if (size === "lg") {
    mapSize.height = "25px";
    mapSize.width = "200px";
  } else if (size === "xl") {
    mapSize.height = "30px";
    mapSize.width = "300px";
  } else if (size === "md") {
    mapSize.height = "20px";
    mapSize.width = "200px";
  }

  let variantDetails = {
    border: "none",
    backgroundColor: "",
    borderRadius: "6px",
  };

  if (variant === "outline") {
    variantDetails.border = "3px solid blue";
  } else if (variant === "filled") {
    variantDetails.backgroundColor = "gray";
  } else if (variant === "flushed") {

  }

  return (
    <input
      type={type}
      value={value}
      style={{
        height: mapSize.height,
        width: mapSize.width,
        border: variantDetails.border,
        backgroundColor: variantDetails.backgroundColor,
        borderRadius: variantDetails.borderRadius,
      }}
      onChange={onChange}
    />
  );
};
