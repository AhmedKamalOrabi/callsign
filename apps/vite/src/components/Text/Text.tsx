type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return <span>{children}</span>;
}
