import * as React from 'react';
import { styled } from '@mui/material';
import { StyledDialog, StyledTitle } from './Popup';
import { WalletButtons } from './styles/walletmodal/WalletButtons';
import { DialogActions } from "@mui/material";


export const StyledActions = styled(DialogActions)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
}))

function WalletPopup(setPopupSignal: Function, popupSignal: boolean) {
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
      height="400px"
      open={open}
      onClose={handleClose}
    >
      <StyledTitle>
        Connect To A Wallet
      </StyledTitle>
      <StyledActions>
        <WalletButtons handleClose={handleClose} />
      </StyledActions>
    </StyledDialog>
  );
}

export default WalletPopup;