import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert aler-primary">{children}</div>
  )
}

export default Alert