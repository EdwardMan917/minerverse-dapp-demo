export interface AppBarProps {
  open: boolean;
}

export interface ButtonProps {
  visible: boolean;
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

export interface ITokenConfig {
  [title: string] : {
    address: string,
    icon: JSX.Element,
    type: string,
    value: string
  }
}