const CustomList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={item.type}>
          <span className="text-lg font-medium">{item.type}</span>

          <h3 className="mt-2 text-sm font-bold">{item.title}</h3>

          <p className="mt-6 font-montserrat text-sm font-medium">
            {item.description}
          </p>

          <span
            className={`block pt-5 text-right text-xl ${data.length !== index + 1 && "mb-5 border-b border-black pb-5"}`}
          >
            {item.date}
          </span>
        </div>
      ))}
    </>
  );
};

export default CustomList;
