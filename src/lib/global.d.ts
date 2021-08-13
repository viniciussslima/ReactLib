declare global {
  interface DrawerProps {
    open: boolean;
    onClose: React.MouseEventHandler<HTMLImageElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    children: ReactNode;
  }

  interface LoadingProps {
    isLoading?: boolean;
  }

  interface ModalProps {
    open: boolean;
    onClose: MouseEventHandler<HTMLElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    title: string;
    titleStyle?: CSSProperties;
    setResponse: (value: boolean) => void;
    cancelButtonStyle?: CSSProperties;
    okButtonStyle?: CSSProperties;
    children: ReactNode;
  }

  interface CarrosselProps {
    children: ReactNode | Array<ReactNode>;
    height: number;
    itemWidth: number;
    qty: number;
    space?: number;
    timeout?: number;
  }

  interface CarrosselItemProps {
    children: ReactNode;
    style?: CSSProperties;
  }

  interface SwitchProps {
    check: boolean;
    onChange: (value: boolean) => void;
    text?: string;
    checkColor?: string;
    unCheckColor?: string;
  }

  interface ToastProps {
    show: boolean;
    onHide: () => void;
    text: string;
    type: string;
    time?: number;
  }

  interface MenuProps {
    show: boolean;
    onHide: () => void;
    anchor: HTMLElement | null;
    children: ReactNode | Array<ReactNode>;
  }

  interface MenuItemProps {
    children: string;
    onClick: () => void;
  }

  interface TooltipProps {
    message: string;
    children: ReactNode;
  }
}

export {};
