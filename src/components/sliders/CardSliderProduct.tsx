interface CardProps {
    title: string;
    img: string;
    parrafo: string;
    textButton: string;
}

export const CardSliderProduct = ({ title, img, parrafo, textButton }: CardProps) => {
    return (
        <div className="w-[189px] flex items-center flex-col justify-between py-5 px-4 h-[279px] bg-white rounded-lg border">
            <p className="text-base font-semibold">{title}</p>
            <img src={img} alt="productImage" className="w-1/2 object-contain" />
            <p className="text-xs font-medium  text-center">{parrafo}</p>
            <button className="text-xs font-semibold border w-full bg-blue-100 text-blue-500 rounded-md py-1 px-2">
                {textButton}
            </button>
        </div>
    );
};
