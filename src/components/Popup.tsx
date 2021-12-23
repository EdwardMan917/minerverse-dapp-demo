import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material';
import { Colors } from 'src/constants/Colors';
import { PopupButton } from './styles/Buttons';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    background: `${Colors.Black}`,
    border: `2px ${Colors.FormBorderGrey} solid`,
    borderRadius: "5px",
    color: `${Colors.White}`,
    width: "350px",
    height: "200px"
  }
}))

const StyledTitle = styled(DialogTitle)(() => ({
  color: `${Colors.White}`,
  fontFamily: "GothamBold",
  fontSize: "25px"
}))

const StyledText = styled(DialogContentText)(() => ({
  color: `${Colors.White}`,
  fontFamily: "GothamBold",
  fontSize: "16px",
  height: "auto"
}))

const StyledActions = styled(DialogActions)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80px"
}))

function Popup(setPopupSignal: Function, popupSignal: boolean, content: { title: string, content: string, buttonName: string }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setPopupSignal(false);
  };

  React.useEffect(() => {
    setOpen(popupSignal);
  }, [popupSignal])

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledTitle>
        {content.title}
      </StyledTitle>
      <DialogContent sx={{ paddingBottom: "0px" }}>
        <StyledText>
          {content.content}
        </StyledText>
      </DialogContent>
      <StyledActions>
        <PopupButton onClick={handleClose}>{content.buttonName}</PopupButton>
      </StyledActions>
    </StyledDialog>
  );
}

export default Popup;