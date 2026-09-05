import type { ButtonVariant } from '@/src/data';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  icon?: string;
}

const Button = ({
  variant = 'default',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'bio-btn flex items-center transition-all duration-200';
  const variantClasses = {
    primary: 'primary',
    gold: 'gold',
    default: '',
  };

  const cls = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <a className={cls} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </a>
  );
};

export default Button;
