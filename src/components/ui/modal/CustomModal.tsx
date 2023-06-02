import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

import {
  CustomModalBlock,
  CustomModalWrap,
  ModalBody,
  ModalCloseBtn,
  ModalHeader,
  ModalTitle,
} from "./custom-modal.s";
import { XCircleIcon } from "../../../assets/icons";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  children: ReactNode;
  title: string;
}

export const CustomModal: FC<ModalProps> = ({
  isShown,
  hide,
  children,
  title,
}) => {
  const modal = (
    <>
      <CustomModalWrap>
        <CustomModalBlock>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            {/* <ModalCloseBtn onClick={hide}>
              <XCircleIcon />
            </ModalCloseBtn> */}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </CustomModalBlock>
      </CustomModalWrap>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
