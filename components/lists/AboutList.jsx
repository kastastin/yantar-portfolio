const AboutList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={item.type}>
          <span className="text-lg font-medium md:text-2xl">{item.type}</span>

          <h3 className="mt-2 text-sm font-bold md:text-lg">{item.title}</h3>

          <p className="mt-6 font-montserrat text-sm font-medium md:text-lg">
            {item.description}
          </p>

          <span
            className={`block pt-5 text-right text-xl md:text-2xl ${data.length !== index + 1 && "mb-5 border-b border-black pb-5 md:mb-10 md:pb-10"}`}
          >
            {item.date}
          </span>
        </div>
      ))}
    </>
  );
};

export default AboutList;
