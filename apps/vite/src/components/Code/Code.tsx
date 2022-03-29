type CodeProps = {
  children: string;
};

export default function Code({ children }: CodeProps) {
  return <code>{children}</code>;
}
