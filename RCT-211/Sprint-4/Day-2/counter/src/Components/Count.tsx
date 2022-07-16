interface Count {
  label: string;
}

const Count = ({ label }: Count) => {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  );
};

export default Count;
