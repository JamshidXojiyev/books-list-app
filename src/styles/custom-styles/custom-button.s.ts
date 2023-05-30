import styled from "styled-components";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
  && {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 12px !important;

    padding: 10px 24px !important;
    border-radius: 4px !important;

    font-weight: 500 !important;
    font-size: 16px !important;
    color: var(--white-50) !important;

    svg {
      width: 16px;
      height: 16px;
      path {
        strokeWidth: 1.6px;
      }
    }
  }
`;
