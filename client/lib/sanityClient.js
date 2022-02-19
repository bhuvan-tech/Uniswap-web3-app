// uniswap token - skIgiE1XsgC0e0pwH7TSWFMU42z7pWOszUBKm9YgktLxHCeQ7Qso8ItRAkmSvHCZ180ZGsuq0sZhgX1jXYWniD37SLct2ddivES20qKjEAVAHJ8yFZem3cYN6xZwBZdnOm385AqUTcUgmkTiZsJs9S27tYyTzv9hqdL4eWv2PSeCa8rhrBOe
// projectId - te7gnvfj

import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'te7gnvfj',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skIgiE1XsgC0e0pwH7TSWFMU42z7pWOszUBKm9YgktLxHCeQ7Qso8ItRAkmSvHCZ180ZGsuq0sZhgX1jXYWniD37SLct2ddivES20qKjEAVAHJ8yFZem3cYN6xZwBZdnOm385AqUTcUgmkTiZsJs9S27tYyTzv9hqdL4eWv2PSeCa8rhrBOe',
    useCdn: false,
})