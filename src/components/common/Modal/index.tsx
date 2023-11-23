import React, { ReactNode, useRef } from "react";
import { useClickOutside } from "../../../helpers/useClickOutside";
import "./modal.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export interface ComponentModalProps extends ModalProps {
  children: ReactNode | string;
}

export const Modal: React.FC<ComponentModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div
      className={`modalWrapper ${className || ""} ${isOpen ? "open" : "close"}`}
    >
      <div ref={modalRef} className="modalWindow">
        <span onClick={onClose} className="close-icon">
          x
        </span>
        {children}
      </div>
    </div>
  );
};
