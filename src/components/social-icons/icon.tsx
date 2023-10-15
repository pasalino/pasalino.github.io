export type IconProps = {
  children: React.ReactNode[] | React.ReactNode;
};
export const Icon = ({ children }: IconProps) => (
  <div className="px-2">{children}</div>
);
