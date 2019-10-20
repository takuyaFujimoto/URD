import * as React from "react";

// 使用するライフサイクルメソッドをここに追加
export function lifecycleHook<P>(
  Component: React.FC<P>,
  hooks: {
    didMount?: (props: P) => void;
  }
) {
  return class functionComponent extends React.Component<P, {}> {
    componentDidMount() {
      if (hooks.didMount) hooks.didMount(this.props);
    }
    render() {
      return <div>{Component(this.props)}</div>;
    }
  };
}
