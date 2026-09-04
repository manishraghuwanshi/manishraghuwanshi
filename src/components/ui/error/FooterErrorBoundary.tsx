import { Component, type ErrorInfo, type ReactNode } from "react";
interface FooterErrorBoundaryProps {
  children: ReactNode;
}
interface FooterErrorBoundaryState {
  hasError: boolean;
}
export default class FooterErrorBoundary extends Component<
  FooterErrorBoundaryProps,
  FooterErrorBoundaryState
> {
  state: FooterErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(): FooterErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Footer Error:", error);
    console.error("Footer Error Info:", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
