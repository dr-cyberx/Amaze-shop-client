import { toast } from "react-toastify";

type TypeToastInput = {
  position?: any;
  duration?: number;
  type?: "warn" | "message" | "info" | "error" | "success";
  message: string;
};

const AmazeToast = (input: TypeToastInput): any => {
  const defaultkeys = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...(input.position && { position: input.position }),
    ...(input.duration && { autoClose: input.duration }),
  };

  switch (input.type) {
    case "warn":
      return toast.warn(input.message, {
        ...defaultkeys,
      });
      break;

    case "success":
      return toast.success(input.message, {
        ...defaultkeys,
      });
      break;

    case "info":
      return toast.info(input.message, {
        ...defaultkeys,
      });
      break;

    case "error":
      return toast.error(input.message, {
        ...defaultkeys,
      });

    default:
      return toast.info("welcome to Amaze shop", {
        ...defaultkeys,
      });
  }
};

export default AmazeToast;
