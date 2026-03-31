"use client";

export function AuditFormLink({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a href="#audit-form" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
