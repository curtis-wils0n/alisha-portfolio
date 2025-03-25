import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  data: {
    src: string;
  }[];
}

export function Carousel({ data }: Props) {
  return (
    <BaseCarousel opts={{ loop: true }} className="w-full h-full max-w-6xl">
      <CarouselContent>
        {data.map((item) => {
          return (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={item.src}>
              <img src={item.src} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </BaseCarousel>
  );
}
