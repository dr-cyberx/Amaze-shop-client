import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle: React.FunctionComponent<
  DialogTitleProps
> = props => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface iCustomizedDialogs {
  modalTitle: string;
  mainContent: any;
  btnText: string;
  openModal: boolean;
  setOpenModal: any;
  btnTitle: string;
  handleClickOpen: () => void;
  handleSubmitClose: () => any;
}

const CustomizedDialogs: React.FunctionComponent<iCustomizedDialogs> = ({
  modalTitle,
  mainContent,
  btnText,
  setOpenModal,
  openModal,
  btnTitle,
  handleClickOpen,
  handleSubmitClose,
}): JSX.Element => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Button
        variant="text"
        onClick={handleClickOpen}
        style={{
          width: "100%",
          fontSize: "1.2rem",
          height: "100%",
          textTransform: "capitalize",
          padding: "10px",
        }}
      >
        {btnTitle}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {modalTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>{mainContent()}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmitClose}>
            {btnText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default CustomizedDialogs;
