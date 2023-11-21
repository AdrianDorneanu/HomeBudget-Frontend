import "./contentLayout.css";

interface ContentLayoutProps {
  children: React.ReactNode;
}
export function ContentLayout({ children }: ContentLayoutProps) {
  return <div className="content-wrapper">{children}</div>;
}
