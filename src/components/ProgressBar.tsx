interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      className="global-progress-bar"
      style={{ width: `${progress * 100}%` }}
    />
  );
};

export default ProgressBar;
