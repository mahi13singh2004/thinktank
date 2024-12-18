import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="ml-5">
        <span className="block mb-4 font-bold  md:text-lg text-indigo-500">
          Welcome To SaaHas
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Time to change the reality for better
        </h3>
        <p className="text-base md:text-lg text-slate-700 font-semibold my-4 md:my-6">
        We stand with you, providing tools and support to ensure your safety and peace of mind. Together, we create a world where you are always protected & respected!
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Try It Now!
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1661403691765-8d582eda7309?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606323544089-4ee380240779?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588747020648-4ff0ec1abecb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1661401949304-aad715ee2142?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/1308413743/photo/portrait-of-stress-young-woman-covering-her-face-with-hands-and-crying.webp?s=2048x2048&w=is&k=20&c=AZocvzua3Wvd68CM4cKPYprdPLJDE_mKKRf86JjMMYU=",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://media.istockphoto.com/id/1245003810/photo/woman-prisoner-behind-barbed-wire.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejC0T4_Odh0yOh2vjjhwfPjlwdKPnoJggSuCj-v4G2c=",
  },
  {
    id: 8,
    src: "https://media.istockphoto.com/id/487729465/photo/i-think-that-guy-is-following-me.jpg?s=612x612&w=0&k=20&c=iKSTaxWyXBAR8a0ts55P0DWdODoFIN7QPB4uCuW9YDw=",
  },
  {
    id: 9,
    src: "https://media.istockphoto.com/id/523694708/photo/stop-violence-over-women.webp?a=1&b=1&s=612x612&w=0&k=20&c=5FTzEY8DQ48pNrmYYvPCzwMoyVuv-xvhsxWhv1XgYNY=",
  },
  {
    id: 10,
    src: "https://media.istockphoto.com/id/182813060/photo/woman-defending-herself-from-attack.webp?a=1&b=1&s=612x612&w=0&k=20&c=GVqYn9j6nyOYiTDGB5KnKvE-PxOkNORGM3HfHDTz9g4=",
  },
  {
    id: 11,
    src: "https://media.istockphoto.com/id/1088189480/photo/silhouette-of-depressed-abused-woman-with-hands-on-head.jpg?s=612x612&w=0&k=20&c=sPACnwLbc6gR0sWq7pX6eNg3Dd5XA73ST6L4-TxcXKI=",
  },
  {
    id: 12,
    src: "https://media.istockphoto.com/id/1353629776/photo/close-up-of-woman-having-a-mental-breakdown.jpg?s=612x612&w=0&k=20&c=dJ988t1VmkqX8bl_MfNvYG0t8LlNBodhtxJu4WG59q8=",
  },
  {
    id: 13,
    src: "https://media.istockphoto.com/id/689684706/photo/a-woman-sitting-on-ground-with-arm-around-lower-head-sexual-violence-sexual-abuse-human.jpg?s=612x612&w=0&k=20&c=5BReW3Qp-63-HoVPUnR6bGnCNw_5rzq91QWCS4gs6-M=",
  },
  {
    id: 14,
    src: "https://media.istockphoto.com/id/1356149389/photo/young-woman-doing-a-stop-sign-with-her-hand.jpg?s=612x612&w=0&k=20&c=ryKC-KpImGuCUrpF6WEjJSfauFkhvZUvqVgSrFyjYT8=",
  },
  {
    id: 15,
    src: "https://media.istockphoto.com/id/1271548786/photo/the-hands-say-what-the-heart-feels.jpg?s=612x612&w=0&k=20&c=9dpZs7Z1YTXvOG9DhtetueU_KjloUO_Fz5xBlpNfz9s=",
  },
  {
    id: 16,
    src: "https://media.istockphoto.com/id/487041210/photo/black-and-white-woman-pointing-old-gun-to-front.jpg?s=612x612&w=0&k=20&c=VAcyMKgVRy-oz0pXRmdOUVVE5Ps1jPtztpRti06dJTg=",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;