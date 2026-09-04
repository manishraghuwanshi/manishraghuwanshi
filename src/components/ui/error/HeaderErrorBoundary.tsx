import { Component, type ErrorInfo, type ReactNode } from "react";

interface HeaderErrorBoundaryProps {
  children: ReactNode;
}

interface HeaderErrorBoundaryState {
  hasError: boolean;
}

export default class HeaderErrorBoundary extends Component<
  HeaderErrorBoundaryProps,
  HeaderErrorBoundaryState
> {
  state: HeaderErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): HeaderErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Header Error:", error);
    console.error("Header Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <header
          aria-label="Header unavailable"
          className="h-16 border-b border-[#1E3E62]/30 bg-[#000000]"
        />
      );
    }

    return this.props.children;
  }
}
