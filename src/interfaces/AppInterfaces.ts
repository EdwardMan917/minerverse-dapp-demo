export interface AppBarProps {
  open: boolean;
}

export interface ButtonProps {
  visible: boolean;
}

export interface DialogProps {
  height: string;
}

export interface FormButtonProps {
  background: string;
  color: string;
  border?: string;
  visible?: boolean;
}

export interface AddressContainerProps {
  visible: boolean;
}

export interface ListItemTextProps {
  selected: boolean;
}

export interface MenuFooterProps {
  visible: boolean;
}

export interface TokenIconProps {
  marginRight?: string;
  diameter: string;
  transform?: string;
}

export interface FormRowProps {
  height?: string;
  padding?: string;
  border?: string;
}

export interface FieldDisplayProps {
  width: string;
}

export interface FieldLabelProps {
  width: string;
}

export interface AccordionProps {
  borderRadius: string;
}

export interface AccordionPanelProps {
  borderBottom: string;
  borderRadius: string;
  maxHeight: string;
}

export interface ExpandIconProps {
  content: string;
}

export interface SwitchProps {
  width: string;
  height: string;
  backgroundColor: string;
  margin?: string;
}

export interface SliderProps {
  backgroundColor: string;
  position: {[side: string]: string}
}

export interface SwitchOverlayProps {
  fontSize: string;
  color: string;
}

export interface ToolbarSubContainerProps {
  justifyContent: string;
}

export interface ITokenConfig {
  [title: string] : ITokenInfo
}

export interface ITokenPair {
  from: ITokenParam,
  to: ITokenParam
}

export interface ITokenParam {
  address: string,
  amount: string,
  type: string
}

export interface ITokenInfo {
  address: string,
  icon: JSX.Element,
  type: string,
  value: string
}

export interface IPopupContent {
  [type: string] : {
    title: string,
    content: string,
    buttonName: string
  }
}

export interface IPoolConfig {
  address: string,
  autoCompound: boolean,
  icon: Function,
  id: number,
  name: string,
  pancakeId: number,
  reward: string[],
  type: string
}

export interface IWalletConfig {
  name: string;
  icon: JSX.Element;
}