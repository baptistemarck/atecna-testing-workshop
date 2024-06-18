import {Button, ButtonProps} from "@mui/material";
import {ReactElement} from "react";

type MyButtonProps = ButtonProps
const MyButton = ({ ...buttonProps }: MyButtonProps): ReactElement => {
  return <Button { ...buttonProps } />
}

export default MyButton