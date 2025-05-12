import { useState } from "react";
import FormDetail from "./form/form-detail";
import WordMark from "../../components/common/word-mark";
import githubIcon from "../../assets/icon-github.svg";
import { generateTicketNumber } from "../../utils/helpers";
const Main = () => {
  const [mode, setMode] = useState<"form" | "ticket">("form");
  const [ticketData, setTicketData] = useState<{
    name: string;
    avatar: null;
    email: string;
    githubUserName: string;
    ticketNumber: string;
  }>({
    name: "",
    email: "",
    avatar: null,
    githubUserName: "",
    ticketNumber: "",
  });

  const onGenerateTicket = (data) => {
    setTicketData({
      ...data,
      avatar: URL.createObjectURL(data.avatar),
      ticketNumber: generateTicketNumber(),
    });
    setMode("ticket");
  };

  const EVENT_DATE_AND_LOCATION = "Jan 31, 2025 / Austin, TX";

  return (
    <div className="mt-5">
      <div className="mt-5 w-[90%] sm:w-[80%] md-[60%] mx-auto">
        {mode === "form" ? (
          <h1 className="text-neut-0 text-2xl font-bold text-center">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
        ) : (
          <p className="text-center w-[60%] md:w-[40%] mx-auto">
            <span className="text-neut-0 text-2xl font-bold">Congrats,</span>
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] text-transparent bg-clip-text mx-2`}
            >
              {ticketData.name}!
            </span>
            <span className="text-neut-0 text-2xl font-bold">
              Your ticket is ready.
            </span>
          </p>
        )}
        {mode === "form" ? (
          <h4 className="text-neut-300 mt-3 text-center">
            Secure your spot at next year's biggest coding conference.
          </h4>
        ) : (
          <p className="text-center w-[60%] md:w-[40%] mx-auto">
            <span className="text-neut-300">We've emailed your ticket to </span>
            <span className="orange-txt mx-3">{ticketData.email}</span>
            <span className="text-neut-300">
              and will send updates in the run up to the event
            </span>
          </p>
        )}
        {mode === "form" && <FormDetail onGenerateTicket={onGenerateTicket} />}
      </div>
      {mode === "ticket" && (
        <div className="max-w-full overflow-auto">
          <div className="grid grid-cols-12 w-[600px] mx-auto ticket-container p-7">
            <div className="col-span-10 flex flex-col justify-start">
              <WordMark center={false} />
              <h4 className="text-neut-300 mt-2 ms-14 text-xs">
                {EVENT_DATE_AND_LOCATION}
              </h4>
              <div className="grid grid-cols-12 mt-auto items-center">
                <div className="col-span-1">
                  <img
                    src={ticketData.avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="col-span-11 flex flex-col">
                  <h4 className="text-neut-0">{ticketData.name}</h4>
                  <div className="flex gap-2">
                    <img
                      src={githubIcon}
                      alt="Github icon"
                      width={20}
                      height={20}
                    />
                    <p className="text-neut-500">
                      @{ticketData.githubUserName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <span
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(360deg)",
                }}
              >
                <p className="text-neut-500 text-xl">
                  #{ticketData.ticketNumber}
                </p>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
