import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterRow, FooterTextBox, I18nDisplay, I18nDropdown, I18nOption, StyledMenuFooter } from "./styles/StyledMenuFooter";
import { I18NIcon } from "./styles/MenuIcons";
import * as Social from "./styles/SocialIcons";
import { MVXIcon } from "./styles/TokensIcons";

function MenuFooter(props: { visible: boolean; }) {

  const [visible, setVisible] = useState(props.visible);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [language, setLanguage] = useState("EN");

  const {i18n} = useTranslation();

  const languageSwitch = (e: any) => {
    setLanguage(e.target.innerHTML);
    if(e.target.id === "cnOption") {
      i18n.changeLanguage("cn");
    } else {
      i18n.changeLanguage("en");
    }
    
    setOptionsVisible(false);
  }

  const showDropdown = () => {
    setOptionsVisible(true);
  }

  const hideDropdown = () => {
    setOptionsVisible(false);
  }

  useEffect(() =>{
    setVisible(props.visible)
  }, [props.visible])

  const dropdownElements = [
    "i18nRow",
    "i18nIcon",
    "i18nDisplay",
    "enOption",
    "cnOption"
  ]

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      if(!dropdownElements.includes(e.target.id)){
        hideDropdown();
      }
    })
  })

  return (
    <StyledMenuFooter visible={visible} >
      <FooterRow>
        <MVXIcon diameter="25px" />
        <FooterTextBox>$ 0</FooterTextBox>
      </FooterRow>
      <FooterRow>
        <Social.TwitterIcon />
        <Social.TelegramIcon />
        <Social.MediumIcon />
        <Social.DiscordIcon />
      </FooterRow>
      <FooterRow id="i18nRow">
        <I18nDisplay 
          onClick={optionsVisible? hideDropdown : showDropdown}
        >
          <I18NIcon id="i18nIcon"/>
          <FooterTextBox id="i18nDisplay">{language}</FooterTextBox>
        </I18nDisplay>
        <I18nDropdown
          visible={optionsVisible}
          onMouseLeave={hideDropdown}
        >
          <I18nOption
            id="enOption"
            borderRadius="14px 14px 0 0" 
            onClick={(e) => languageSwitch(e)}
          >
            EN
          </I18nOption>
          <I18nOption
            id="cnOption"
            borderRadius="0 0 14px 14px" 
            onClick={(e) => languageSwitch(e)}
          >
            中文
          </I18nOption>
        </I18nDropdown>
      </FooterRow>
    </StyledMenuFooter>
  )
}

export default MenuFooter;