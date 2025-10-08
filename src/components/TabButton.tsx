import {ReactNode} from "react";

type TabButtonProps = {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
};

export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
    return (
        <button onClick={onSelect}>{children}</button>
    );
}