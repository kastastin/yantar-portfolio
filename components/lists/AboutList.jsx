import Divider from "@/components/Divider";

const AboutList = ({ data }) => {
  return (
    <div className="lg:flex lg:flex-wrap lg:gap-10">
      {data.map((item, index) => (
        <div
          key={item.type}
          className="lg:flex lg:w-[calc(50%-20px)] lg:flex-col lg:border lg:border-black lg:p-5"
        >
          <span className="text-lg font-medium md:text-2xl">{item.type}</span>

          <h3 className="mt-2 text-sm font-bold md:text-lg">{item.title}</h3>

          <p className="mt-6 font-montserrat text-sm font-medium md:text-lg lg:mb-auto">
            {item.description}
          </p>

          <Divider marginStyle="max-lg:hidden lg:mt-5" />

          <span
            className={`block pt-5 text-right text-xl md:text-2xl lg:mb-0 lg:border-b-0 lg:pb-0 ${data.length !== index + 1 && "mb-5 border-b border-black pb-5 md:mb-10 md:pb-10"}`}
          >
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutList;
