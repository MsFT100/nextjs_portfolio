import { BentoGrid, BentoGridItem } from "./ui/bento_grid";

import { gridItems } from "@/data";

export const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        icon={item.icon ? <item.icon /> : null}
                        img={item.img}
                        spareImg={item.spareImg}
                        titleClassName={item.titleClassName}
                        imgClassName={item.imgClassName}
                        hasGradient={item.hasGradient}
                    />
                ))}
            </BentoGrid>

        </section>
    );

}