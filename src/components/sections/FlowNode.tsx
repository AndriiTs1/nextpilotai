type FlowNodeProps = {
  label: string;
  variant: "manual" | "automated";
};

export default function FlowNode({ label, variant }: FlowNodeProps) {
  return (
    <div className={`flow-node flow-node--${variant}`}>
      <span className="flow-node-label">{label}</span>
    </div>
  );
}
