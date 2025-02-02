import Button from "@/components/Button";
import designexample1img from "@/assets/images/design-example-1.png";
import designexample2img from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from '@/components/Pointer';

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designexample1img} alt="designexample1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designexample2img} alt="designexample2" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name='Andres'/>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name='Bryan' color="red"/>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        🎃 $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, optio rem nisi ut nobis natus! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Dolor et illo fuga iste
                    cupiditate nulla!
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}

// 1:00:00