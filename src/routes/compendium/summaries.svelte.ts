import type { AbilityBoost, Size, Vision } from "$lib/bindings";

export const ALL_SUMMARIES = ['condition', 'ancestry'] as const;
export type SummaryTuple = typeof ALL_SUMMARIES;
export type SummaryKey = SummaryTuple[number]

export const summariesFetchLocation = {
    condition: "/api/condition",
    ancestry: "/api/ancestry"
}

export function summaryFactory(summaryType: SummaryKey) {
    switch (summaryType) {
        case "ancestry":

    }
}

export class Summary {
    public id: string;
    public slug: string;
    public description: string;
    public name: string;
    [key: string]: any;

    constructor(id: string, slug: string, description: string, name: string) {
        this.id = id;
        this.slug = slug;
        this.description = description;
        this.name = name
    }
}
