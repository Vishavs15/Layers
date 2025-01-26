import { section } from "framer-motion/client";
import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="container py-28 lg:py-40">
            <div className="flex justify-center">
                <Tag className="">Introducing Layers</Tag>
            </div>
            <div className="text-4xl text-center font-medium mt-10 md:text-6xl lg:text-7xl">
                <span>Your Creative process deserves better.</span>{" "}
                <span className="text-white/15">{text}</span>
                <span className="text-lime-400 block">
                    That&apos;s why we built Layers.
                </span>
            </div>
        </section>
    );
}
