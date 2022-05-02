// 异常边界

import React, { ReactNode } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement
export class ErrorBoundary extends React.Component<{ children: ReactNode, fallbackRender: FallbackRender }, { error: Error | null }> {
    state = { error: null };
    /**
     * 
     * @param error 
     * 当子组件抛出异常的时候，这里会接受带并且调用
     * @returns 
     */
    static getDerivedStateFromError(error: Error) {
        return { error }
    }

    render() {
        const { error } = this.state
        const { children, fallbackRender } = this.props
        if (error) {
            return fallbackRender({ error })
        }
        return children
    }
}