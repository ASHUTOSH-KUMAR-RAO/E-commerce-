
import type { CollectionConfig } from 'payload'


export const Categorise: CollectionConfig = {
    slug: 'categoriese',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
    ],

}
