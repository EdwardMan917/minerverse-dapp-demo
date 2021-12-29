export interface AppBarProps {
  open: boolean;
}

export interface ButtonProps {
  visible: boolean;
}

export interface FormButtonProps {
  background: string;
  color: string;
  border?: string;
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
  icon: JSX.Element,
  id: number,
  name: string,
  pancakeId: number,
  reward: string[],
  type: string
}