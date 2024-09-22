import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";

const Testimonials = () => (
  <>
    <span className="mb-5 block text-sm md:mb-10 md:text-xl">Testimonials</span>

    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item.name} className="min-h-full lg:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col border-l-4 border-black pl-6 md:pl-10">
              <p className="mb-auto grow font-montserrat text-sm font-medium md:text-lg">
                {item.text}
              </p>

              <div className="mt-6 md:mt-10">
                <span className="block text-xs uppercase md:text-base">
                  {item.position}
                </span>

                <span className="mt-0.5 block text-sm font-bold md:text-lg">
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

export default Testimonials;
