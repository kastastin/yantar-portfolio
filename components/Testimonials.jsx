import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <>
      <span className="mb-5 block text-sm">Testimonials</span>

      <Carousel>
        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem key={item.name} className="min-h-full">
              <div className="flex h-full flex-col border-l-4 border-black pl-6">
                <p className="mb-auto grow font-montserrat text-sm font-medium">
                  {item.text}
                </p>

                <div className="mt-6">
                  <span className="block text-xs uppercase">
                    {item.position}
                  </span>

                  <span className="mt-0.5 block text-sm font-bold">
                    {item.name}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Testimonials;
