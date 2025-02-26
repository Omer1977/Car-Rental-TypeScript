import { motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils/generateImage";
import CustomButton from "../CustomButton";
import DetailModal from "../DetailModal";
import { useState } from "react";

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const translate = {
    fwd: "Ön Çekişli",
    rwd: "Arka İtişli",
    "4wd": "4 Çeker",
    awd: "4 Çeker",
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="text-[19px] self-end font-semibold">/gün</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="group-hover:hidden flex w-full justify-between">
          <div className="flex-center flex-col">
            <img width={25} src="/steering-wheel.svg" />
            <p>{car.transmission === "a" ? "Otomatik" : "Manuel"} </p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg" />
            <p>{translate[car.drive]}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/gas.svg" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        <div className="group-hover:flex hidden w-full">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <DetailModal
        car={car}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
