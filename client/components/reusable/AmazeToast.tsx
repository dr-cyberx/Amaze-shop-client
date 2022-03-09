import { ReactText } from 'react';
import { toast } from 'react-toastify';

type TypeToastInput = {
  position?: any;
  duration?: number;
  type?: 'warn' | 'message' | 'info' | 'error';
  message: string;
};

const AmazeToast = (input: TypeToastInput): (() => ReactText) | undefined => {
  const defaultkeys = {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...(input.position && { position: input.position }),
    ...(input.duration && { autoClose: input.duration }),
  };

  switch (input.type) {
    case 'warn':
      return () =>
        toast.info(input.message, {
          ...defaultkeys,
        });
      break;

    case 'info':
      return () =>
        toast.info(input.message, {
          ...defaultkeys,
        });
      break;

    case 'error':
      return () =>
        toast.error(input.message, {
          ...defaultkeys,
        });
      break;

    default:
      toast.info('welcome to Amaze shop', {
        ...defaultkeys,
      });
      break;
  }
};

export default AmazeToast;
