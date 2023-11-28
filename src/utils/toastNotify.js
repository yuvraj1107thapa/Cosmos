import { toast } from "react-toastify";

const toastNotify = (type, msg) => {
  if (type === "success") {
    toast.success(`${msg}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  } else {
    toast.error(`${msg}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  }
};

export default toastNotify;