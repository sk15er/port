
import { useTheme } from "@/hooks/use-theme";

export default function Logo() {
  const theme = useTheme();
  
  return (
    <div className="w-10 h-10 relative">
      <img
        src="/attached_assets/arc reactor r.png"
        alt="AI Expert Logo"
        className={`w-full h-full object-contain transition-colors duration-200 ${
          theme === 'dark' 
            ? 'brightness-125 contrast-125' 
            : 'brightness-100 contrast-100'
        }`}
      />
    </div>
  );
}
