import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import { primaryColor } from "../../constants/colors";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
export const ContainerLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: clamp(85px, 10vw, 150px);
`;
export const PopperStyled = styled.div`
  background-color: ${primaryColor};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(85px, 10vw, 150px);
  height: clamp(20px, 6vh, 100px);
  text-transform: uppercase;
  cursor: pointer;
  animation: mymove 1.2s;
  ::after {
    @keyframes mymove {
      100% {
        transform: translateY();
        opacity: 1;
      }
      0% {
        transform: translateY(-50px) translateY(0);
        opacity: 0.1;
      }
    }
  }
`;
