import { IMG_PATH } from "../config";
import { useRef } from "react";
import useObserver from "../hooks/useObserver";

type Props = {
  id: string;
  description: string;
  logo: string;
  company: string;
  title: string;
  dateRange: string;
};

const ExpCard = ({
  id,
  logo,
  company,
  title,
  dateRange,
  description,
}: Props) => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);

  const index = parseInt(id, 10);
  const isLeft = index % 2 === 0;
  const alignment = isLeft ? "mr-auto" : "ml-auto";

  return (
    <div
      id={id}
      ref={ref}
      className={
        `flex-none flex items-start rounded-2xl p-6 mb-6 shadow-lg 
         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
         w-full ${alignment}` +
        (isVisible
          ? ` ${isLeft ? "fadeinleft" : "fadeinright"} animation-duration-500`
          : " opacity-0")
      }
      style={{ maxWidth: "1440px" }}
    >
      {isLeft ? (
        <>
          {/* Logo left, content right */}
          <div
            className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-xl p-1 overflow-hidden"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
            id={`expcard-logo-${id}`}
          >
            <img
              src={IMG_PATH + logo}
              alt={`${company} Logo`}
              className="w-full h-full object-cover photo"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-semibold text-primary">
              {company}{" "}
              <span className="text-[#00bfa6] font-normal text-white">
                {title}
              </span>
            </h3>
            <span className="block text-sm text-gray-400 mb-2">
              {dateRange}
            </span>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
        </>
      ) : (
        <>
          {/* Content left, logo right */}
          <div className="mr-4 flex-1 text-right">
            <h3 className="text-xl font-semibold text-primary">
              {company}{" "}
              <span className="text-[#00bfa6] font-normal text-white">
                {title}
              </span>
            </h3>
            <span className="block text-sm text-gray-400 mb-2">
              {dateRange}
            </span>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
          <div
            className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-xl p-1 overflow-hidden"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
            id={`expcard-logo-${id}`}
          >
            <img
              src={IMG_PATH + logo}
              alt={`${company} Logo`}
              className="w-full h-full object-cover photo"
            />
          </div>
        </>
      )}
      <style>
        {`
          @media (max-width: 450px) {
            #expcard-logo-${id} {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ExpCard;
