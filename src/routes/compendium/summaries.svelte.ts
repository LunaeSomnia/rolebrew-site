import type { Summary } from "$lib/bindings";

export type Summaries = {
    conditions: Summary[]
    ancestries: Summary[]
}

export let summaries: Summaries = $state({
    conditions: [],
    ancestries: []
})