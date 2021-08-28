import toast from "react-hot-toast";

const renderToast = (toastOptions: ToastOptions) => {
  const { type, message } = toastOptions;
  return toast[type](message);
};
type ToastOptions = {
  type: "success" | "error";
  message: string;
};

export default renderToast;
