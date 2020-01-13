import * as React from "react";

// 使用するライフサイクルメソッドをここに追加
export function lifecycleHook<P>(
  Component: React.FC<P>,
  hooks: {
    didMount?: (props: P) => void;
  },
  //どうしてもここにスタイルを当てたい時に
  opstionClass?: string | undefined
) {
  return class functionComponent extends React.Component<P, {}> {
    componentDidMount() {
      if (hooks.didMount) hooks.didMount(this.props);
    }
    render() {
      return <div className={opstionClass}>{Component(this.props)}</div>;
    }
  };
}
