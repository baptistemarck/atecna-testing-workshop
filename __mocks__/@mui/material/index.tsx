import { vi } from "vitest"
export const Button = vi.fn(({children, ...props}) => <button { ...props }>{ children }</button>)