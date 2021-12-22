import { useEffect, useState } from "react";
import { FooterRow, FooterTextBox, StyledMenuFooter } from "./styles/StyledMenuFooter";
import { I18NIcon } from "./styles/MenuIcons";
import * as Social from "./styles/SocialIcons";
import { MVXIcon } from "./styles/TokensIcons";

function MenuFooter(props: { visible: boolean; }) {

  const [visible, setVisible] = useState(props.visible);

  useEffect(() =>{
    setVisible(props.visible)
  }, [props.visible])

  return (
    <StyledMenuFooter visible={visible} >
      <FooterRow>
        <MVXIcon />
        <FooterTextBox>$ 0</FooterTextBox>
      </FooterRow>
      <FooterRow>
        <Social.TwitterIcon />
        <Social.TelegramIcon />
        <Social.MediumIcon />
        <Social.DiscordIcon />
      </FooterRow>
      <FooterRow>
        <I18NIcon />
        <FooterTextBox>EN</FooterTextBox>
      </FooterRow>
    </StyledMenuFooter>
  )
}

export default MenuFooter;