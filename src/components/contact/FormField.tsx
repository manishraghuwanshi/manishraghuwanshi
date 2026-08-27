import { useEffect, useRef } from "react";

interface FormFieldProps {
  label?: string;
  required?: boolean;
  invalid?: boolean;
  children: React.ReactNode;
}

export default function FormField({
  label,
  required = false,
  invalid = false,
  children,
}: FormFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!invalid || !fieldRef.current) {
      return;
    }

    fieldRef.current.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      {
        duration: 350,
        easing: "ease-in-out",
      },
    );
  }, [invalid]);

  return (
    <div ref={fieldRef}>
      {label && (
        <label
          className={`mb-2 block text-sm font-semibold ${
            invalid ? "text-red-400" : "text-white"
          }`}
        >
          {label}

          {required && (
            <span
              className={`ml-1 ${
                invalid ? "text-red-400" : "text-[#1E3E62]"
              }`}
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      {children}
    </div>
  );
}