import "./actionButton.css";

export interface ActionButtonProps {
  text: string;
  disabled: boolean;
}
export function ActionButton({ text, disabled }: ActionButtonProps) {
  return (
    <button
      data-testid="action-button"
      type="submit"
      disabled={disabled}
      className="action-button"
    >
      {text}
    </button>
  );
}
