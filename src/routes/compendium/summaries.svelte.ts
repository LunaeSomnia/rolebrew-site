import type { Summary } from "$lib/bindings";

export const summaries: {
    condition: Summary[] | undefined
    ancestry: Summary[] | undefined
} = $state({
    condition: undefined,
    ancestry: undefined
})
export type SummaryKey = keyof typeof summaries

export const summariesFetchLocation = {
    condition: "/api/condition",
    ancestry: "/api/ancestry"
}